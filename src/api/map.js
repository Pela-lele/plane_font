import Vue from 'Vue'
export default {
	getList () {
		console.log(Vue)
		return this.$ajax.get('/mDrone/dronem/list.action',{
			param: {
				type:1
			}
		});
	}
};