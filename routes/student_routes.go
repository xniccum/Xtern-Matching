package routes

import (
	"github.com/gorilla/mux"
	"Xtern-Matching/handlers"
)

func GetStudentRoutes() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/student/{Id}", handlers.GetStudent).Methods("GET").Name("GetStudent")
	router.HandleFunc("/student", handlers.GetStudents).Methods("GET").Name("GetStudents")
	router.HandleFunc("/student", handlers.PostStudent).Methods("POST").Name("CreateStudent")
	router.HandleFunc("/student/getstudents", handlers.GetStudentsFromIds).Methods("POST").Name("GetStudentsFromIds")
	router.HandleFunc("/student/addComment/{Id}", handlers.AddComment).Methods("GET").Name("AddComment")
	router.HandleFunc("/student/deleteComment/{Id}", handlers.DeleteComment).Methods("GET").Name("DeleteComment")
	return router
}