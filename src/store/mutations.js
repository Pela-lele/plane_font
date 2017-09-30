export default {
  //飞行报备表单记录选择的飞行证书
	RECORD_LICENSELIST(state,licenseList) {
		state.fxbbForm.licenseList = licenseList;
	},
  //飞行报备表单记录选择的无人机
	RECORD_DRONELIST(state,droneList) {
		state.fxbbForm.droneList = droneList;
	},
  //飞行报备表单记录飞行区域
  RECORD_FLIGHTAREA(state,flightArea) {
    state.fxbbForm.flightArea = flightArea;
  },
  //飞行报备表单记录起飞点
  RECORD_FLIGHTSTARTLOCATION(state,flightStartLocation) {
    state.fxbbForm.flightStartLocation = flightStartLocation;
  },
  //飞行报备表单记录降落点
  RECORD_FLIGHTENDLOCATION(state,flightEndLocation) {
    state.fxbbForm.flightEndLocation = flightEndLocation;
  },
  //删除飞行报备表单记录
	DELETE_FXBBFORM(state) {
		// state.fxbbForm = {};
		state.fxbbForm.licenseList = [];
		state.fxbbForm.droneList = [];
		state.fxbbForm.flightArea = null;
		state.fxbbForm.flightStartLocation = null;
		state.fxbbForm.flightEndLocation = null;
	},
  //保存飞行报备表单记录
  SAVE_FXBBFORM(state,{
    licenseList,droneList,flightArea,flightStartLocation,flightEndLocation
  }) {
    state.fxbbForm.licenseList = licenseList||[];
    state.fxbbForm.droneList = droneList||[];
    state.fxbbForm.flightArea = flightArea||null;
    state.fxbbForm.flightStartLocation = flightStartLocation||null;
    state.fxbbForm.flightEndLocation = flightEndLocation||null;
  },
  /*************************用户管理begin*************************/
  RECORD_ENTERTYPE(state,enterType) {
    state.enterType = enterType||"";
  },

  /*************************用户管理end*************************/
	//无人机管理
  //选择无人机厂商
  RECORD_WRJGLPRO(state,obj) {
    state.wrjgl.choosePro = obj.pro;
    state.wrjgl.parentId = obj.proId;
    state.wrjgl.chooseType = [];
  },
  //删除已经选择的无人机厂商
  DELETE_WRJGLPRO(state) {
    state.wrjgl.choosePro = [];
    state.wrjgl.parentId = [];
  },
  //选择无人机型号
  RECORD_WRJGLTYPE(state,obj) {
    state.wrjgl.chooseType = obj.type;
    state.wrjgl.droneId = obj.typeId;
  },
  //删除已经选择的无人机型号
  DELETE_WRJGLTYPE(state) {
    state.wrjgl.chooseType = [];
    state.wrjgl.droneId  = [];
  },

  //无人机证书管理
  //选择无人机的型号
  RECORD_FXZSTYPE(state,obj) {
    state.fxzsgl.chooseZs = obj.ZSType;
    state.fxzsgl.licenseMId = obj.lMId;
  },
  //删除选择的无人机型号
  DELETE_FXZSTYPE(state) {
    state.fxzsgl.chooseZs = [];
    state.fxzsgl.licenseMId =[];

  },
}
