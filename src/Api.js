import axios from "axios";

const baseUrl = "http://10.10.56.115:9601/";

export default class Api {
    static postVideoData = (newVideo) => {
		console.log('post video');
		return axios.post(
			"http://10.10.56.115:9601/update-video-annotation",
			newVideo
		);
	};

    static getCategories = () => {
		return axios.get(baseUrl + "list-categories");
		////return axios.get(baseUrlHR + "employee_api/surnames/");
	};

	static postLogin = () => {
		return axios.post(baseUrl + "login");
		////return axios.get(baseUrlHR + "employee_api/surnames/");
	};
	
}



