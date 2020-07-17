import axios from 'axios'
import Vue from 'vue'

const state = {
  arrayOfQuiz: [],
  arrayOfQuestions: [],
  quizzes: [],
  oneQuiz: {},
  questionsOfQuiz: [],
  quizLoading: true,
  quizResult: []

};

const getters = {
  quizzes: state => state.quizzes,
  quizTemplate: state => state.oneQuiz,
  questionsTemplate: state => state.questionsOfQuiz,
  quizLoading: state => state.quizLoading,
  quizResults: state => state.quizResult
}


const actions = {
  async saveQuiz({commit}, data) {
    let APIKey = 'http://localhost:8080/';
    const response = await Vue.http.post(`${APIKey}quiz/save-quiz`, {
      arrayOfQuestions: data.questions,
      arrayOfQuiz: data.quiz
    }, {emulateJSON: true});
    if (response.status === 200) {
      commit('setQuestions', data.questions);
      commit('setQuiz', data.questions);
    }
  },
  async startQuiz({commit}) {
    await axios.get('http://localhost:8080/quiz'
    ).then((response) => {
      if (response.status === 200) {
        commit('getQuizzes', response.data)
        commit('quizLoad');
      }
    });
  },
  async getQuiz({commit}, id) {
    const response = await axios.get(`http://localhost:8080/quiz/${id}`);
    if (response.status === 200) {
      commit('getQuizTemplate', response.data);
    }
  },
  async getQuestions({commit}, id) {
    const response = await axios.get(`http://localhost:8080/quiz/getAll/${id}`);
    if (response.status === 200) {
      commit('getQuestionsTemplate', response.data);
      commit('quizLoad')
    }
  },
  async saveResult({dispatch}, payload) {
    await Vue.http.post("http://localhost:8080/result/create", {
      arrayOfAnswers: payload.quiz,
      arrayOfQuestions: payload.questions
    }, {emulateJSON: true});
    dispatch('save');
  },
  async getQuizResult({commit}) {
    const response = await Vue.http.get(`http://localhost:8080/result`, {emulateJSON: true});
    console.log(response);
    if (response.status === 200) {
      console.log(response.data);
      commit('results', response.data);
    }

  },
  async login({commit}, data) {
    console.log(data.username);
    try {
      await axios.post(`http://localhost:8080/user/login`, data);
      commit('w');
    } catch (e) {
      return e.response.status;
    }
  }
}

const mutations = {
  setQuiz: (state, quiz) => (state.arrayOfQuiz = quiz),
  setQuestions: (state, questions) => (state.arrayOfQuestions = questions),
  getQuizzes: (state, quiz) => (state.quizzes = quiz),
  getQuizTemplate: (state, quiz) => (state.oneQuiz = quiz),
  getQuestionsTemplate: (state, questions) => (state.questionsOfQuiz = questions),
  quizLoad: (state) => (state.quizLoading = false),
  results: (state, results) => (state.quizResult = results)
};

export default {
  state,
  actions,
  getters,
  mutations
}