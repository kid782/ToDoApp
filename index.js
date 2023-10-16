/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todoapp/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/createDomEl.js":
/*!*******************************!*\
  !*** ./src/js/createDomEl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass domCreator {\n    static createElement({tagName, clsName, content, child, eventName, \n        eventCallback, attribute,attributeVal}) {\n        const element = document.createElement(tagName);\n        if(clsName) {\n            if (Array.isArray(clsName)) {\n                clsName.forEach(cls => {\n                    element.classList.add(cls);\n                })\n            } else {\n                element.classList.add(clsName);\n            }\n        }\n        if (content) {\n            element.textContent = content;\n        }\n        if(child) {\n            if(Array.isArray(child)) {\n                child.forEach(childElement => {\n                    if(childElement) {\n                        element.appendChild(childElement);\n                    }\n                });\n            } else {\n                element.appendChild(child);\n            }\n        }\n        if(eventName && eventCallback) {\n            element.addEventListener(eventName, eventCallback);\n        }\n        if(attribute) {\n            element.setAttribute(attribute, attributeVal);\n        }\n        return element;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domCreator);\n\n//# sourceURL=webpack://todoapp/./src/js/createDomEl.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   projectsInit: () => (/* binding */ projectsInit),\n/* harmony export */   updateStorage: () => (/* binding */ updateStorage)\n/* harmony export */ });\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ \"./src/js/modules/header.js\");\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer.js */ \"./src/js/modules/footer.js\");\n/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects */ \"./src/js/modules/projects.js\");\n\n\n\n\n\nlet projectsInit = [\n    {\n       id: 4324,\n       name: 'Example',\n       tasks: [\n        {   \n            title: 'Example task',\n            description: 'Task description',\n            dueDate: new Date(),\n            priority: 'Medium',\n            notes: [\n                {\n                    text: 'Note 1'\n                }\n            ]\n        }\n       ]\n    }\n]\n\nlet projects = localStorage.getItem('projects') === null ? projectsInit : JSON.parse(localStorage.getItem('projects'));\n\nconst getProjects = () => {\n   const item = localStorage.getItem('projects');\n   return JSON.parse(item);\n}\nif(localStorage.getItem('projects') === null) {\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\nfunction updateStorage() {\n    localStorage.setItem('projects', JSON.stringify(projects));\n    projects = JSON.parse(localStorage.getItem('projects'));\n}\n\nconst headers = document.querySelectorAll('.header');\nconst footers = document.querySelectorAll('.footer');\n\nheaders.forEach(header => new _modules_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](header));\nfooters.forEach(footer => new _modules_footer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](footer));\n\nnew _modules_projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"](projects);\n\n\n//# sourceURL=webpack://todoapp/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/addNewProject.js":
/*!*****************************************!*\
  !*** ./src/js/modules/addNewProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDomEl */ \"./src/js/createDomEl.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/js/modules/projects.js\");\n\n\n\n\n\nclass addNewProject {\n    constructor() {\n        this.main = document.querySelector('.main');\n        this.createPopUp();\n    }\n    createPopUp() {\n        const modalTitle = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Enter the new project name', clsName:'project__label'\n    });\n        const projNameInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'input', attribute:'type', attributeVal:'text', clsName:'project__add-input'});\n        const projectConfirmInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName:'button', \n            attribute:'type',\n            attributeVal:'button', \n            clsName:['js-new-proj', 'btn'], \n            content:'Confirm'\n        });\n        const popUpContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__modal',child:[projNameInput,projectConfirmInput, modalTitle]});\n        const popUpBody = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__body', child:popUpContainer});\n        this.main.appendChild(popUpBody);\n        projectConfirmInput.onclick = this.handleModalConfirmButton;\n    }\n    handleModalConfirmButton(e) {\n        const popUpBody = document.querySelector('.project__body');\n        const popUpInput = document.querySelector('.project__add-input');\n        const validateProjectInput = (element) => {\n            if(element.value) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n        const renderValidationMessage = () => {\n            if(document.querySelector('.project__val-msg')) return false;\n            const popUpModal = document.querySelector('.project__modal');\n            const valMsg = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName: 'project__val-msg', content: 'Please enter the new projects name'})\n            popUpModal.appendChild(valMsg);\n        }\n        const reRenderProjects = (val) => {\n            const newProjectName = \n            {\n                id: Math.random(),\n                name: val,\n                tasks: []\n            }\n            ___WEBPACK_IMPORTED_MODULE_1__.projects.push(newProjectName);\n            (0,___WEBPACK_IMPORTED_MODULE_1__.updateStorage)();\n            _projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addNewProjectDom(___WEBPACK_IMPORTED_MODULE_1__.projects);\n        }\n\n        if(validateProjectInput(popUpInput)) {\n            popUpBody.remove();\n            reRenderProjects(popUpInput.value);\n        } else {\n            renderValidationMessage();\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewProject);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/addNewProject.js?");

/***/ }),

/***/ "./src/js/modules/addNewTask.js":
/*!**************************************!*\
  !*** ./src/js/modules/addNewTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDomEl */ \"./src/js/createDomEl.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/js/modules/project.js\");\n/* harmony import */ var _projectRenderLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectRenderLogic */ \"./src/js/modules/projectRenderLogic.js\");\n/* harmony import */ var _reusableNodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableNodes */ \"./src/js/reusableNodes.js\");\n\n\n\n\n\n\n\nclass AddNewTask {\n    constructor() {\n        this.main = document.querySelector('.main');\n        this.createNewTaskPopUp();\n    }\n    static createNewTaskButton() {\n        const spanMove = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'span',\n            clsName: 'task__move'\n        })\n        const textMove = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'span',\n            clsName: 'task__text-move',\n            content: 'Add new task'\n        })\n        const noteIcon = (0,_reusableNodes__WEBPACK_IMPORTED_MODULE_4__.faIcon)([\"fa-solid\", \"fa-plus\"]);\n        const addNewTaskButton = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'button',\n            clsName: 'task__add-btn',\n            attribute: 'type',\n            attributeVal: 'button',\n            eventName: 'click',\n            eventCallback: _projectRenderLogic__WEBPACK_IMPORTED_MODULE_3__.handleAddTaskClick,\n            child: [noteIcon, spanMove, textMove]\n        })\n        return addNewTaskButton;\n    }\n    createNewTaskPopUp() {\n            const modalTitle = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Enter the new task name', clsName:'project__label'\n        });\n            const taskNameInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'input', attribute:'type', attributeVal:'text', clsName:['project__add-input', 'task__title-input']});\n            const descLabel = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Enter the task description', clsName:'project__label'});\n            const taskDescInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'textarea',clsName:['project__add-input', 'task__desc']});\n            const prioLabel = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Enter the task priority', clsName:'project__label'});\n            const taskPrioInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'select', attribute:'type', attributeVal:'text', clsName:['project__add-input', 'task__prio']});\n            taskPrioInput.options.add(new Option('Low', 'Low'));\n            taskPrioInput.options.add(new Option('Medium', 'Medium'));\n            taskPrioInput.options.add(new Option('High', 'High'));\n            const taskConfirmationButton = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n                tagName:'button', \n                attribute:'type',\n                attributeVal:'button', \n                clsName:['js-new-proj', 'project__btn', 'btn'], \n                content:'Confirm', \n                event:'click',eventCallback:this.handleModalConfirmButton\n            });\n            const popUpContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__modal',child:[modalTitle, taskNameInput,descLabel, taskDescInput, prioLabel, taskPrioInput, taskConfirmationButton]});\n            const popUpBody = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__body', child:popUpContainer});\n            this.main.appendChild(popUpBody);\n            taskConfirmationButton.onclick = this.handleModalConfirmButton;\n    }\n    handleModalConfirmButton(e) {\n        const popUpBody = document.querySelector('.project__body');\n        const inputTitle = document.querySelector('.task__title-input');\n        const inputDesc = document.querySelector('.task__desc');\n        const inputPrio = document.querySelector('.task__prio');\n        const validateTaskInput = (element) => {\n            if(element.value) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n        const renderValidationMessage = () => {\n            if(document.querySelector('.project__val-msg')) return false;\n            const popUpModal = document.querySelector('.project__modal');\n            const valMsg = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName: 'project__val-msg', content: 'Please enter the new projects name'})\n            popUpModal.appendChild(valMsg);\n        }\n        const reRenderTasks = () => {\n            const activeProj = document.querySelector('.project__item.active');\n            const activeProjID = activeProj.dataset.project;\n            const activeProjIndex = ___WEBPACK_IMPORTED_MODULE_1__.projects.findIndex((item) => {\n                return item.id == activeProjID;\n            })\n            const newTask = {\n                title : inputTitle.value,\n                description : inputDesc.value,\n                priority: inputPrio.value\n            }\n            if(___WEBPACK_IMPORTED_MODULE_1__.projects[activeProjIndex].tasks) {\n                ___WEBPACK_IMPORTED_MODULE_1__.projects[activeProjIndex].tasks.push(newTask);\n                (0,___WEBPACK_IMPORTED_MODULE_1__.updateStorage)();\n                _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reRenderTasks(activeProjID);\n            } else {\n                ___WEBPACK_IMPORTED_MODULE_1__.projects[activeProjIndex].tasks = [];\n                ___WEBPACK_IMPORTED_MODULE_1__.projects[activeProjIndex].tasks.push(newTask);\n                (0,___WEBPACK_IMPORTED_MODULE_1__.updateStorage)();\n                _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reRenderTasks(activeProjID);\n            }\n        }\n\n        if(validateTaskInput(inputTitle) && validateTaskInput(inputDesc) && validateTaskInput(inputPrio)) {\n            popUpBody.remove();\n            reRenderTasks();\n        } else {\n            renderValidationMessage();\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNewTask);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/addNewTask.js?");

/***/ }),

/***/ "./src/js/modules/footer.js":
/*!**********************************!*\
  !*** ./src/js/modules/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDomEl */ \"./src/js/createDomEl.js\");\n/* harmony import */ var _reusableNodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusableNodes */ \"./src/js/reusableNodes.js\");\n\n\nclass Footer {\n    constructor(element) {\n        this.footer = document.querySelector('.footer');\n        this.createFooterDom();\n    }\n    createFooterDom() {\n        const copyright = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName:'div',\n            clsName: 'footer__copyright',\n            content: '© Stefan Beljin, All Rights Reserved.'\n        })\n        const gitHubText = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\n            {\n                tagName:'a',\n                attribute:'href',\n                attributeVal: 'https://github.com/kid782',\n                clsName: 'footer__github',\n                content: 'View more of my projects',\n                child: (0,_reusableNodes__WEBPACK_IMPORTED_MODULE_1__.faIcon)(['fa-brands','fa-github'])\n            }\n        )\n        const footerHolder = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'div',\n            clsName: 'footer__holder',\n            child: [copyright, gitHubText]\n        })\n        this.footer.appendChild((0,_reusableNodes__WEBPACK_IMPORTED_MODULE_1__.wrap)(footerHolder));\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/footer.js?");

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/logo.jpg */ \"./src/assets/images/logo.jpg\");\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createDomEl */ \"./src/js/createDomEl.js\");\n/* harmony import */ var _reusableNodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusableNodes */ \"./src/js/reusableNodes.js\");\n\n\n\n\nclass Header {\n    constructor(element) {\n        this.header = document.querySelector('.header');\n        this.createHeaderDom();\n    }\n    createHeaderDom() {\n        const headerTitle = _createDomEl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement({tagName:'h2',clsName:'header__title', content:'To Do'});\n        const headerText = _createDomEl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement({\n            tagName: 'div', \n            clsName:'header__text',\n            content: 'Make your responsibilites easy'\n        });\n        const headerHolder = _createDomEl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement({\n            tagName:'div', \n            clsName:'header__holder',\n            child: [headerTitle, headerText]\n        });\n        this.header.appendChild((0,_reusableNodes__WEBPACK_IMPORTED_MODULE_2__.wrap)(headerHolder));\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/header.js?");

/***/ }),

/***/ "./src/js/modules/project.js":
/*!***********************************!*\
  !*** ./src/js/modules/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDomEl */ \"./src/js/createDomEl.js\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList */ \"./src/js/modules/taskList.js\");\n/* harmony import */ var _projectRenderLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectRenderLogic */ \"./src/js/modules/projectRenderLogic.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ \"./src/js/modules/projects.js\");\n\n\n\n\n\n\n\nclass Project {\n    static default = '4324';\n    constructor({id, name, tasks}) {\n        this.name = name;\n        this.tasks = tasks;\n        this.id = id;\n        this.active = id == Project.default;\n        this.parent = document.querySelector('.js-projects');\n        this.renderProject();\n        if(this.active) {\n            this.renderTaskListForProject();\n        }\n    }\n    static setDefault(value) {\n        Project.default = value;\n    }\n    renderProject() {\n        this.parent.appendChild(this.createDomForProject());\n    }\n    renderTaskListForProject() {    \n        new _taskList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.tasks);\n    }\n    createDomForProject() {\n        const classes = this.active ? ['project__item', 'active']:'project__item'\n        const projectProps = {\n            tagName: 'button',\n            clsName: classes,\n            content: this.name,\n            eventName: 'click',\n            eventCallback:_projectRenderLogic__WEBPACK_IMPORTED_MODULE_2__.handleProjectBtnClick,\n            attribute: 'data-project',\n            attributeVal: this.id\n        }\n        const project = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(projectProps);\n        return project;\n    };\n    static clearCurrentTasks() {\n        const tasks = document.querySelector('.js-todos .tasks');\n        if(!tasks) return;\n        tasks.innerHTML = '';\n    }\n    static getTasksForProject(id) { \n       const newActiveProj = _index__WEBPACK_IMPORTED_MODULE_3__.projects.find((item) => item.id == id);\n       return newActiveProj.tasks;\n    }\n    static reRenderTasks(id) {\n        Project.clearCurrentTasks();\n        const newActiveTasks = Project.getTasksForProject(id);\n        new _taskList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newActiveTasks);\n    }\n    static getActiveProjectIndex(){\n        const activeProj = document.querySelector('.project__item.active');\n        const activeProjID = activeProj.dataset.project;\n        const activeProjIndex = (0,_index__WEBPACK_IMPORTED_MODULE_3__.getProjects)().findIndex((item) => {\n            return item.id == activeProjID;\n        })\n        return activeProjIndex;\n    }\n    static removeProject() {\n        const activeProjectId = Project.getActiveProjectId();\n        const indexOfProjectToRemove = _index__WEBPACK_IMPORTED_MODULE_3__.projects.findIndex((item) => {\n            return item.id == activeProjectId;\n        })\n        _index__WEBPACK_IMPORTED_MODULE_3__.projects.splice(indexOfProjectToRemove, 1);\n        (0,_index__WEBPACK_IMPORTED_MODULE_3__.updateStorage)();\n        const addTaskBtn = document.querySelector('.task__add-btn');\n        addTaskBtn.remove();\n        _projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ReRenderProjectDom((0,_index__WEBPACK_IMPORTED_MODULE_3__.getProjects)());\n    }\n    static getActiveProjectId() {\n        const currentlyActiveProj = document.querySelector('.project__item.active');\n        return currentlyActiveProj.dataset.project;\n    }\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/project.js?");

/***/ }),

/***/ "./src/js/modules/projectRenderLogic.js":
/*!**********************************************!*\
  !*** ./src/js/modules/projectRenderLogic.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAddProjectClick: () => (/* binding */ handleAddProjectClick),\n/* harmony export */   handleAddTaskClick: () => (/* binding */ handleAddTaskClick),\n/* harmony export */   handleProjectBtnClick: () => (/* binding */ handleProjectBtnClick)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/modules/project.js\");\n/* harmony import */ var _addNewProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewProject */ \"./src/js/modules/addNewProject.js\");\n/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewTask */ \"./src/js/modules/addNewTask.js\");\n\n\n\n\nfunction handleProjectBtnClick(e) {\n    const projectsContainer = document.querySelector('.js-projects');\n        handleActiveProj(e.target);\n}   \nfunction handleAddProjectClick() {\n    new _addNewProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n}\n\nfunction handleAddTaskClick() {\n    new _addNewTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n}\n\n\nconst handleActiveProj = (current) => {\n    manageActiveButtonStyle(current);\n    _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reRenderTasks(current.dataset.project);\n}\n\nconst manageActiveButtonStyle = (element) => {\n    const allProjButtons = document.querySelectorAll('.project__item');\n    allProjButtons.forEach(el => {\n        el.classList.remove('active');\n    })\n    element.classList.add('active');\n}\n\n\n//# sourceURL=webpack://todoapp/./src/js/modules/projectRenderLogic.js?");

/***/ }),

/***/ "./src/js/modules/projects.js":
/*!************************************!*\
  !*** ./src/js/modules/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDomEl */ \"./src/js/createDomEl.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/js/modules/project.js\");\n/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewTask */ \"./src/js/modules/addNewTask.js\");\n/* harmony import */ var _projectRenderLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectRenderLogic */ \"./src/js/modules/projectRenderLogic.js\");\n/* harmony import */ var _reusableNodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableNodes */ \"./src/js/reusableNodes.js\");\n\n\n\n\n\n\nclass Projects {\n    constructor(projects) {\n        this.main = document.querySelector('.main');\n        this.projects = projects;\n        this.createProjectsDom();\n    }\n    renderProjects() {\n        this.projects.forEach(proj => {\n            new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](proj);\n        });\n    }\n    createProjectsDom() {\n        const removeIcon = (0,_reusableNodes__WEBPACK_IMPORTED_MODULE_4__.faIcon)(['fa-solid', 'fa-trash']);\n        const removeButton = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName:'button',\n            clsName:'project__remove',\n            child: removeIcon,\n            eventName: 'click',\n            eventCallback: _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeProject\n        })\n        let projectsTitle = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'h2',\n            clsName: 'projects-title',\n            content: 'Projects'\n        })\n        let projectsDom =  _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'div',\n            clsName: ['projects', 'js-projects']\n        })\n        let projectNav = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'div',\n            clsName: 'upper-main',\n            child: [projectsDom, this.createAddProjectButton(), removeButton]\n        })\n        let taskListInnerContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'div',\n            clsName: 'tasks'\n        });\n        let taskListContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'section',\n            clsName: 'js-todos',\n            child:  taskListInnerContainer\n        })\n        this.main.appendChild(projectsTitle);\n        this.main.appendChild(projectNav);\n        if(!this.checkIfElementExists('js-todos')) {\n            this.main.appendChild(taskListContainer);\n        } else {\n            taskListContainer = document.querySelector('.js-todos');\n        }\n        this.renderProjects();\n    }\n    createAddProjectButton() {\n        const plusIcon = (0,_reusableNodes__WEBPACK_IMPORTED_MODULE_4__.faIcon)(['fa-solid','fa-plus']);\n        const button = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'button',\n            clsName: ['project__add', 'js-add-proj'],\n            attribute: 'type',\n            attributeVal: 'button',\n            eventName: 'click',\n            eventCallback: _projectRenderLogic__WEBPACK_IMPORTED_MODULE_3__.handleAddProjectClick,\n            child: plusIcon\n        })\n        const buttonContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'div',\n            clsName: 'project__btn-wrap',\n            child: button\n        })\n        return buttonContainer;\n    }\n    checkIfElementExists(cls) {\n        if(document.querySelector(`.${cls}`)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n    clearExistingProjects() {\n        const projects = document.querySelector('.projects');\n        projects.innerHTML = '';\n    }\n    static addNewProjectDom(projArr) {\n        this.clearProjects(); \n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setDefault(projArr[projArr.length - 1].id);  \n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearCurrentTasks();\n        projArr.forEach(proj => {\n            new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](proj);\n        })    \n    }\n    static ReRenderProjectDom(projArr) {\n        this.clearProjects(); \n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setDefault(projArr[0].id);\n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearCurrentTasks(); \n        projArr.forEach(proj => {\n            new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](proj);\n        }) \n    }\n    static clearProjects() {\n        const projectItems = document.querySelectorAll('.project__item');\n        projectItems.forEach(item => {\n            item.remove();\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/projects.js?");

/***/ }),

/***/ "./src/js/modules/task.js":
/*!********************************!*\
  !*** ./src/js/modules/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDomEl */ \"./src/js/createDomEl.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/js/modules/project.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n\n\n\n\n\nclass Task {\n    constructor({title, description, dueDate, priority, notes}) {\n        this.main = document.querySelector('.main');\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.checked = false;\n    }\n    static currentEditTask = null;\n    get currentEditTask() {\n        return Task.currentEditTask;\n    }\n    set currenItemText(item) {\n        Task.currentEditTask = item;\n    }\n    createTask() {\n        const titleEl = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName: 'h2', clsName:'task__title', content: this.title});\n        const descEl = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName: 'p', clsName:'task__description', content: this.description});\n        const priorityEl = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName: 'span', clsName:['task__priority', this.getPriorityClass()], content: this.priority});\n        const editTaskBtn = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'button', \n            attribute:'type',\n            attributeVal:'button',\n            clsName:'task__edit',\n            content:'Edit',\n            eventName: 'click',\n            eventCallback: this.editTask\n        });\n        const deleteTaskBtn = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName: 'button', attribute:'type',attributeVal:'button',\n        clsName:'task__delete', content:'Remove', eventName:'click', eventCallback:this.deleteTask});\n        const btnContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'task__controls',child:[editTaskBtn, deleteTaskBtn]});\n        const taskContentWrapper = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName: 'div', clsName: 'task__container', child: [\n            titleEl,\n            descEl,\n            priorityEl\n        ]})\n        const nodeItem = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\n            {\n                tagName: 'div', \n                clsName: 'task__item',\n                child: [taskContentWrapper, btnContainer]\n                \n            });\n        return nodeItem;\n    }\n    getPriorityClass() {\n        if(this.priority === 'Low') {\n            return 'task__priority--low';\n        } else if(this.priority === 'Medium') {\n            return 'task__priority--medium';\n        } else if (this.priority === 'High') {\n            return 'task__priority--high';\n        }\n    }\n    deleteTask(e) {\n        const activeProjID = _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActiveProjectId();\n        const currentProjectIndex = _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActiveProjectIndex();\n        const currentItem = e.target.closest('.task__item');\n        const currentTaskTitle = currentItem.querySelector('.task__title').textContent;\n        const currentTaskDesc = currentItem.querySelector('.task__description').textContent;\n        const currentProjectTasks = ___WEBPACK_IMPORTED_MODULE_2__.projects[currentProjectIndex].tasks\n        const indexOfTaskToRemove = currentProjectTasks.findIndex((item) => {\n            return item.title === currentTaskTitle && item.description === currentTaskDesc;\n        })\n        ___WEBPACK_IMPORTED_MODULE_2__.projects[currentProjectIndex].tasks.splice(indexOfTaskToRemove, 1);\n        (0,___WEBPACK_IMPORTED_MODULE_2__.updateStorage)();\n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reRenderTasks(activeProjID);\n    }\n    editTask(e) {\n        const currentItem = e.target.closest('.task__item');\n        const currenItemText = currentItem.querySelector('.task__title').textContent;\n        const currentItemDesc = currentItem.querySelector('.task__description').textContent;\n        const currentItemPrio = currentItem.querySelector('.task__priority').textContent;\n        const task = {text: currenItemText, desc: currentItemDesc, prio: currentItemPrio};\n        Task.currenItemText = task;\n        Task.createEditTaskPopUp(currenItemText, currentItemDesc, currentItemPrio);\n    }\n    static createEditTaskPopUp(text, desc, prio) {\n        const modalTitle = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Task name', clsName:'project__label'\n    });\n        const taskNameInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'input', attribute:'type', attributeVal:'text', clsName:['project__add-input', 'task__title-input']});\n        taskNameInput.value = text;\n        const descLabel = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Task description', clsName:'project__label'});\n        const taskDescInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'textarea',clsName:['project__add-input', 'task__desc']});\n        taskDescInput.value = desc;\n        const prioLabel = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Task priority', clsName:'project__label'});\n        const taskPrioInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'select', attribute:'type', attributeVal:'text', clsName:['project__add-input', 'task__prio']});\n        taskPrioInput.options.add(new Option('Low', 'Low'));\n        taskPrioInput.options.add(new Option('Medium', 'Medium'));\n        taskPrioInput.options.add(new Option('High', 'High'));\n        taskPrioInput.value = prio;\n        const taskConfirmationButton = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName:'button', \n            attribute:'type',\n            attributeVal:'button', \n            clsName:['js-new-proj', 'project__btn', 'btn'], \n            content:'Confirm', \n            eventName:'click',\n            eventCallback: Task.handleEditConfirm\n        });\n        const popUpContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__modal',child:[modalTitle, taskNameInput,descLabel, taskDescInput, prioLabel, taskPrioInput, taskConfirmationButton]});\n        const popUpBody = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__body', child:popUpContainer});\n        document.querySelector('.main').appendChild(popUpBody);\n    }\n    static handleEditConfirm(e) {\n        const activeProjID = _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActiveProjectId();\n        const newTitle = document.querySelector('.task__title-input').value;\n        const newDesc = document.querySelector('.task__desc').value;\n        const newPrio = document.querySelector('.task__prio').value;\n        const currentProjectIndex = _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActiveProjectIndex();\n        const currentProjectTasks = (0,___WEBPACK_IMPORTED_MODULE_2__.getProjects)()[currentProjectIndex].tasks\n        const popUpBody = document.querySelector('.project__body');\n        const indexOfTaskToEdit = currentProjectTasks.findIndex((item) => {\n            return item.title === Task.currenItemText.text;\n        })\n        const editedTask = {\n            title: newTitle,\n            description : newDesc,\n            priority: newPrio\n        }\n        ___WEBPACK_IMPORTED_MODULE_2__.projects[currentProjectIndex].tasks.splice([indexOfTaskToEdit],1,editedTask);\n        popUpBody.remove();\n        (0,___WEBPACK_IMPORTED_MODULE_2__.updateStorage)();\n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reRenderTasks(activeProjID);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/task.js?");

/***/ }),

/***/ "./src/js/modules/taskList.js":
/*!************************************!*\
  !*** ./src/js/modules/taskList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDomEl */ \"./src/js/createDomEl.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/js/modules/task.js\");\n/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewTask */ \"./src/js/modules/addNewTask.js\");\n\n  \n\n\nclass TaskList {\n    constructor(tasks) {\n        this.parent = document.querySelector('.tasks');\n        this.tasks = tasks;\n        this.createTaskList();\n    }\n\n    createTaskList() {\n        if(!this.tasks) return;\n        const taskItems = this.tasks.map((taskItem) => {\n           const item = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskItem);\n           return item.createTask();\n        })\n        taskItems.push(_addNewTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createNewTaskButton());\n        const containerProps = {\n            tagName: 'div',\n            clsName: 'task__items',\n            child: taskItems\n        }\n        const taskItemsContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(containerProps);\n        this.parent.appendChild(taskItemsContainer);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/taskList.js?");

/***/ }),

/***/ "./src/js/reusableNodes.js":
/*!*********************************!*\
  !*** ./src/js/reusableNodes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   faIcon: () => (/* binding */ faIcon),\n/* harmony export */   wrap: () => (/* binding */ wrap)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomEl */ \"./src/js/createDomEl.js\");\n\n\nconst wrap = (item) => {\n    return _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'wrapper', child: item});\n}\n\nconst faIcon = (icon) => {\n    return _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'i', clsName:icon});\n}\n\n//# sourceURL=webpack://todoapp/./src/js/reusableNodes.js?");

/***/ }),

/***/ "./src/assets/images/logo.jpg":
/*!************************************!*\
  !*** ./src/assets/images/logo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20e521fefc6e73ce3007.jpg\";\n\n//# sourceURL=webpack://todoapp/./src/assets/images/logo.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;