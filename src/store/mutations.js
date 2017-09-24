export default {
	RECORD_FXZSLIST(state,fxzslist) {
		state.chooseFxzsList = fxzslist;
	},
	DELETE_FXBBFORM(state) {
		state.chooseFxzsList = [];
	}
}