import axios from './index'
var $ajax = axios.ajax;
export default {
/*-----------------------------------飞行报备begin----------------------------------*/
	//获取报备记录
	getReportrecordList (param) {
		return $ajax.get("/mDrone/app/reportrecord/page.action",{
			params: param
		})
	},
  //提交报备记录
  saveReportrecord (data) {
    return $ajax.post("/mDrone/app/reportrecord/save.action",data)
  },
  //编辑报备记录
  updateReportrecord (data) {
    return $ajax.post("/mDrone/app/reportrecord/update.action",data)
  },
  //获取限飞禁飞区域
  getLimitarea (param) {
    return $ajax.get("/mDrone/app/limitarea/list.action",{
      params: param
    })
  },
  //获取申报记录详情
  getReportrecordInfo (id) {
    return $ajax.get("/mDrone/app/reportrecord/getById.action",{
      params: {
        "reportRecord.recordId" : id
      }
    })
  },
  //取消申报记录
  cancelReportrecordInfo (id) {
    return $ajax.get("/mDrone/app/reportrecord/cancel.action",{
      params: {
        "reportRecord.recordId" : id
      }
    })
  },
/*-----------------------------------飞行报备end----------------------------------*/


/*-----------------------------------个人用户begin----------------------------------*/
  //添加，编辑个人用户信息
  saveUsers (data) {
    return $ajax.post("/mDrone/app/users/save.action",data)
  },
  //详情
  getUsersDetail (id) {
    return $ajax.get("/mDrone/app/users/usersDetail.action",{
      params: {
        "users.userId" : id
      }
    })
  },

/*-----------------------------------个人用户begin----------------------------------*/
/*-用户飞行证书-*/
  //获取用户飞行证书列表
  getUserLicenseList (param) {
    return $ajax.get("/mDrone/app/license/page.action",{
      params: param
    })
  },
  //新增用户飞行证书保存
  saveLicenseInfo(param){
    return $ajax.get("/mDrone/app/license/save.action",{
      params: param
    })
  },
  //获取用户飞行证书详情
  getUserLicenseDetail(param){
    return $ajax.get("/mDrone/app/license/licenseDetail.action",{
      params: param
    })
  },
  //删除用户飞行证书
  deleteUserLicense(param){
    return $ajax.get("/mDrone/app/license/delete.action",{
      params:param
    })
  },

  /*--用户无人机----*/
  //获取用户无人机列表
  getUserDroneList (param) {
    return $ajax.get("/mDrone/app/drone/page.action",{
      params: param
    })
  },
  //新增用户无人机保存
  SaveDroneInfo(param){
    return $ajax.get("mDrone/app/drone/save.action",{
      params: param
    })
  },
  //根据droneId获取用户无人机详情
  getUserDroneDetail (param) {
    return $ajax.get("/mDrone/app/drone/droneDetail.action",{
      params: param
    })
  },
  //根据droneId删除增加的无人机
  deleteUserDrone(param){
    return $ajax.get("/mDrone/app/drone/delete.action",{
      params:param
    })
  },


  //无人机管理
  //获取无人机厂商型号
  getDronemList(param){
    return $ajax.get("/mDrone/app/dronem/page.action",{
      params: param
    })
  },

  //飞行证书管理
  getLicensemList(param){
    return $ajax.get("/mDrone/app/licensem/page.action",{
      params:param
    })
  },

  //上传图片
  uploadDroneImg(data,config){
    return $ajax.post("/mDrone/photoupload/fileUpload.action",data,{
          headers: {'Content-Type': 'multipart/form-data'}
        })
  }


};
