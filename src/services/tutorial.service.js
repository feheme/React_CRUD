import http from "../http-common";
class TutorialDataService {
  //http://85.159.71.66:8080/api/tutorials
  getAll() {
    return http.get("/tutorials");
  }

  //http://localhost:8080/api/tutorials/id
  get(id) {
    return http.get(`/tutorials/${id}`);
  }
  //http://localhost:8080/api/tutorials // {"title:tutorial1,"description:"tutorial des"}
  create(data) {
    console.log(data);
    return http.post("/tutorials", data);
  }
  update(id, data) {
    console.log("güncellenecek tutorial id" + id);
    console.log("güncellenecek tutorial " + data);
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  findByTitle(title) {
    return http.get(`tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
