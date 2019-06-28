import {
    POINT_CONVERSION_COMPRESSED
} from "constants";
import {
    stringify
} from "querystring";

var videoClose = null;

let dataArr = []
let videoArr = {}
    //选择相机
const choiceCamera = function(vm, dataparams, decideparams, crop) {
    let cmr = plus.camera.getCamera();
    cmr.captureImage(function(p) {
        plus.io.resolveLocalFileSystemURL(p, function(entry) {
            var localurl = entry.toLocalURL();
            var index1 = localurl.lastIndexOf(".");
            var index2 = localurl.length;
            var postf = localurl.substring(index1, index2).toLowerCase(); //获取文件后缀名
            if (postf == '.jpg' || postf == '.jpeg' || postf == '.gif' || postf == '.png') {
                console.log('转被进入裁切的')
                if (crop) {
                    // 需要裁切
                    console.log('图片要裁切')
                    vm.$emit('changes', {
                        url: entry.toLocalURL(),
                        isEdits: false,
                        dataparams,
                        decideparams
                    })
                } else {
                    //  不需要裁切
                    vm.localUrl = entry.toLocalURL();
                    console.log('图片不要裁切')
                        //图片压缩
                    convertImage(vm, dataparams, decideparams);
                }
            } else {
                // 上传视频
                //  不需要裁切
                vm.localUrl = entry.toLocalURL();
                console.log('转入视频上传')
                    //图片压缩
                convertImage(vm, dataparams, decideparams);
            }


        }, function(e) {

        });
    }, function(e) {}, {
        index: 1,
        filename: "_doc/camera/"
    });
};
//选择相册的图片
const galleryImg = function(vm, dataparams, decideparams, crop) {
    // 从相册中选择图片
    plus.gallery.pick(function(path) {
        var index3 = path.lastIndexOf(".");
        var index4 = path.length;
        var pathsub = path.substring(index3, index4).toLowerCase(); //获取文件后缀名 
        if (pathsub == '.jpg' || pathsub == '.jpeg' || pathsub == '.gif' || pathsub == '.png') {
            if (crop) {
                // 需要裁切
                console.log('这里需要进行裁切')
                vm.$emit('changes', {
                    url: path,
                    isEdits: false,
                    dataparams,
                    decideparams
                })
            } else {
                //  不需要裁切
                vm.localUrl = path;
                console.log('这里不需要进行裁切')
                    //图片压缩
                convertImage(vm, dataparams, decideparams);
            }
        }
    }, function(e) {
        console.log("取消选择图片");
    }, {
        filter: "image"
    });
};
//选择相册上传视频
const galleryVideo = function(vm, dataparams, decideparams) {
    plus.gallery.pick(function(path) {
        // var index3 = path.lastIndexOf(".");
        // var index4 = path.length;
        // var pathsub = path.substring(index3, index4).toLowerCase(); //获取文件后缀名 

            vm.localUrl = path;
            alert(path)
            return path
        

    }, function(e) {

        console.log("取消选择视频");

    }, {
        filter: "video"
    });
};
//压缩图片
const convertImage = function(vm, dataparams, decideparams) {
        ////////////////////////////////判断上传文件的格式/////////////////////////////
        console.log(vm.localUrl)
        plus.io.resolveLocalFileSystemURL(vm.localUrl, function( entry ) {
            // 可通过entry对象操作test.html文件 
            entry.file( function(file){
                var fileReader = new plus.io.FileReader();
                alert("getFile:" + JSON.stringify(file));
                vm.fileObj= file
                

            } );
        }, function ( e ) {
            alert( "Resolve file URL failed: " + e.message );
        }  );
        uploadvideo(vm, dataparams, decideparams);
        
    }
    //上传
const upload = function(vm, dataparams, decideparams) {
    // alert('开始准备上传')
    plus.nativeUI.showWaiting("正在执行", {
        modal: false
    });
    let url = vm.$api.upload; //http://172.168.1.154:88/api/upload

    var seat = vm.localUrl.lastIndexOf(".");
    var extension = vm.localUrl.substring(seat).toLowerCase();
    alert(vm.localUrl)
    // 请求上传管理创建新的上传任务，创建成功则返回Upload对象，用于管理上传任务。
    let task = plus.uploader.createUpload(url, {
            method: "POST",
            blocksize: 2048000,
            priority: 100
        },
        function(t, status) {
            if (status == 200) {
                console.log('上传成功---------------》》》》》》》》'+ t.url)
            } else {
                console.log( "Upload failed: " + status );
            }
        }
    );

};
//保存
const editLogo = function(vm, params) {
    vm.$http.post(Api.editNickName, params).then(function(response) {
        //隐藏
        Utils.hideLoading(vm);
        if (response.data.code === '001') {
            store.set('logo', params.logo);
        } else {
            vm.$vux.toast.show({
                text: response.data.info
            });
        }
    });
};


//  视频上传
const uploadvideo = function(vm, dataparams, decideparams) {
    let params =  new FormData()
    params.append('file',vm.fileObj)
    params.append('course',  9)
    params.append('date', '2019-03-14')
    vm.$http.post(vm.$conf.env.uploadvideo, params, true).then(res =>{
        var objRes =  {
            "res": res,
            'err':''
        };
        return objRes
    }).catch(err =>{
        var objErr = {
            "err": err,
            'res':''
        };
        return objErr
    })


    // task.addData("memberId",store.get('memberId'));
    //  进度监听
    // taskVideo.addEventListener("statechanged", function(upload, status) {
    //     if (!taskVideo) {
    //         return;
    //     }
    //     switch (upload.state) {
    //         case 1: // 开始
    //             console.log('开始上传');
    //             console.log("upload.totalSizeupload.totalSize-->" + upload.totalSize);
    //             console.log("totalsize" + upload.totalSize / 1024 / 1024);
    //             if (upload.totalSize / 1024 / 1024 > 30) {
    //                 console.log("视频上传的大小大于30m------>");
    //                 vm.$vux.toast.show({
    //                     text: '视频上传的大小不能超过30M',
    //                     type: 'text',
    //                     position: 'middle',
    //                     time: 1500,
    //                     isShowMask: false,
    //                     padding: '0.613333rem',
    //                     width: '6.4rem'
    //                 })
    //                 taskVideo.abort();
    //             } else {
    //                 console.log("视频上传的大小小于30m------>");
    //                 vm.$store.state.upload.uploadLoading = true;
    //             }
    //             break;
    //         case 2: // 已连接到服务器
    //             console.log("链接到服务器...");
    //             break;
    //         case 3: // 已接收到数据
    //             // 转化进度
    //             var progressVal = (upload.uploadedSize / upload.totalSize) * 100;
    //             vm.$store.commit('changePress', progressVal);
    //             break;
    //         case 4: // 下载完成
    //             // vm.$vux.toast.text('视频正在加载中,请稍等....', 'middle');
    //             break;
    //     }
    // }, false);
    // // 开始上传
    // taskVideo.start();
    // videoClose = taskVideo;
};

//  关闭上传任务
const closeUpload = function() {
    if (videoClose) {
        //  停止上传任务
        videoClose.abort();
        videoClose = null;
    }

};
//图文数据编辑
const DataArr = function(vm, params) {
    dataArr = params
    return dataArr
};


export default {
    choiceCamera,
    galleryImg,
    galleryVideo,
    editLogo,
    upload,
    closeUpload,
    DataArr

}