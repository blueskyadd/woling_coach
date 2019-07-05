// const winchaingroupApi = "https://www.bmeauto.cn";
const winchaingroupApi = "http://94.191.15.122/";


module.exports = {
    //登录
    login: winchaingroupApi + 'user/app/login/',//教练端app
    sms_code: winchaingroupApi + 'user/app/sms_code/',//发送短信验证码
    change_pwd: winchaingroupApi + 'user/app/change_pwd/',//修改密码

    //教练信息
    getUserInfo: winchaingroupApi + 'user/app/info/',//教练信息

    //首页
    isSingIn: winchaingroupApi + 'user/app/sign/',//是否可以签到
    singIn: winchaingroupApi + 'user/app/sign/',//签到

    //活动
    getActivityList: winchaingroupApi + 'good/app/activity/',//主推热点列表
    getActivelyDetail: winchaingroupApi + 'good/app/activity/',//活动详情

    //课程
    getClassList: winchaingroupApi + 'good/app/class/',//教练课程列表
    getClassTime: winchaingroupApi + 'good/app/classtime/?course=',//教练班级课程表
    //学员
    getSclassList: winchaingroupApi + 'good/app/sclass/',// 教练班级
    getStudentList: winchaingroupApi + 'good/app/sclass/',//教练班级学生

    //评分
    getScoreList: winchaingroupApi + 'assess/app/score/',//评分班级学生

    //自评
    getClassSelfList: winchaingroupApi + 'assess/app/class/',//自评教练班级
    getClassTimeList: winchaingroupApi + 'assess/app/classtime/?course=',//自评教练班级课程表
    getClassDetail: winchaingroupApi + 'assess/app/classtime/',// 自评详情

    //考核
    getAccessList: winchaingroupApi + 'assess/app/assess/',//考评
    getCoachassess: winchaingroupApi + 'assess/app/coachassess/',// 考评详情

    //班级
    getExerciseList: winchaingroupApi +  'good/app/exercise/',//练习班级
    
    //视频
    uploadvideo: winchaingroupApi  + 'good/app/video/',

    //学生课程视频
    getVideo_course: winchaingroupApi + 'good/app/svideo/?user=',//user 学生id video__course 课程id

    getSarchList: winchaingroupApi + 'good/app/sclass/?search='
}