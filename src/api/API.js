import axios from './index'
var $ajax = axios.ajax;
export default {
	//获取飞行计划

	getReportrecordList (param) {
		return $ajax.get("/mDrone/app/reportrecord/page.action",{
			params: param
		})
	},
  saveReportrecord (data) {
    return $ajax.post("/mDrone/app/reportrecord/save.action",data)
  },

  //无人机管理
  //获取无人机厂商型号
  getDronemList(param){
    return $ajax.get("/mDrone/app/dronem/page.action",{
      params: param
    })
  },

};
