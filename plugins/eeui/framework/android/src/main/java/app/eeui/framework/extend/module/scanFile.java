package app.eeui.framework.extend.module;

import android.app.Activity;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;

import com.taobao.weex.bridge.JSCallback;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

public class scanFile extends Activity {
    private static ArrayList<Map<String, Object>> scanedFiles = new ArrayList<Map<String, Object>>();

    /*扫描线程*/
    private static Thread scanThread;
    /*定时器  用于定时检测扫描线程的状态*/
    private static Timer scanTimer;
    private static String[] musicCheckList = {".MP3",".FLAC",".QMC0",".QMC2",".QMC3",".QMCFLAC",".QMCOGG",".TM0",".TM2",".TM3",".TM6",".MFLAC",".MGG",".NCM"}; //支持扫描格式
    /*检测扫描线程的任务*/
    private static TimerTask scanTask;
    private static Boolean isSong(File file) {
        String fileName = file.getName().toUpperCase();
        Boolean result = false;
        for(int i=0; i<musicCheckList.length; i++) {
            String key = musicCheckList[i];
            if(fileName.endsWith(key)){
                result = true;
                break;
            }
        }
        return result; //false
    }
    /*开始扫描*/
    public static void startScan(JSCallback call) {
        /*根目录*/
        scanedFiles.clear();
        final String rootPath = Environment.getExternalStorageDirectory().getAbsolutePath();
        final File dir = new File(rootPath);
        Log.i("rootPath",rootPath);
        if(dir.listFiles()==null) {
            Map<String, Object> result = new HashMap<>();
            result.put("state","error");
            result.put("fileList",scanedFiles);
            call.invoke(result);
        } else {
            scanThread = new Thread(new Runnable() {
                @Override
                public void run() {
                    scanFile(dir);
                }
            });
            /*判断扫描是否完成 其实就是个定时任务 时间可以自己设置  每2s获取一下扫描线程的状态  如果线程状态为结束就说明扫描完成*/
            scanTimer = new Timer();
            scanTask = new TimerTask() {
                @Override
                public void run() {
                    Log.i("线程状态",scanThread.getState().toString());

                    if (scanThread.getState() == Thread.State.TERMINATED) {
                        /*说明扫描线程结束 扫描完成*/
                        Map<String, Object> result = new HashMap<>();
                        result.put("state","success");
                        result.put("fileList",scanedFiles);
                        call.invoke(result);
                    }
                }
            };
            scanTimer.schedule(scanTask, 0,1000);
            /*开始扫描*/
            scanThread.start();
        }
    }
    /*扫描*/
    private static void scanFile(File dir) {
        File[] files = dir.listFiles();
        if (files != null && files.length > 0) {
            for (final File file : files) {
                if (isSong(file)) {
                    /*是符合后缀名的文件  添加到列表中*/
                    Map<String, Object> fileData = new HashMap<>();
                    fileData.put("fileName",file.getName());
                    fileData.put("path","file://"+file.getPath());
                    System.out.println(file);

                    scanedFiles.add(fileData);
                }
                /*是目录*/
                if (file.isDirectory()) {
                    /*递归扫描*/
                    scanFile(file);
                }
            }
        }
    }
}
