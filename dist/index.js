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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ \"./src/js/modules/header.js\");\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer.js */ \"./src/js/modules/footer.js\");\n/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects */ \"./src/js/modules/projects.js\");\n\n\n\n\n\nconst projects = [\n    {\n        id: 'odin',\n       name: 'Odin' ,\n       tasks: [\n        {   \n            title: 'Example',\n            description: 'Description example',\n            dueDate: new Date(),\n            priority: 'Medium',\n            notes: [\n                {\n                    text: 'Note 1'\n                }\n            ]\n        }\n       ]\n    },\n    {\n        id: 'lost-ark',\n       name: 'Instalacija Lost Ark-a',\n       tasks: [\n        {   \n            title: 'Example 2',\n            description: 'Description example',\n            dueDate: new Date(),\n            priority: 'Medium',\n            notes: [\n                {\n                    text: 'Note 1'\n                }\n            ]\n        }\n       ]\n    }, \n    {\n        id: 'sadjenje-baste',\n        name: 'Sadjenje baste',\n        tasks: [\n            {   \n                title: 'Veoma skalabilno',\n                description: 'Description example',\n                dueDate: new Date(),\n                priority: 'Medium',\n                notes: [\n                    {\n                        text: 'Note 1'\n                    }\n                ]\n            },        {   \n                title: 'Duvaj ga Alisa',\n                description: 'Description example',\n                dueDate: new Date(),\n                priority: 'Medium',\n                notes: [\n                    {\n                        text: 'Note 1'\n                    }\n                ]\n            },\n            {   \n                title: 'Ovo sranje radi',\n                description: 'Description example',\n                dueDate: new Date(),\n                priority: 'Medium',\n                notes: [\n                    {\n                        text: 'Note 1'\n                    }\n                ]\n            }\n           ]\n    }, \n    {\n        id: 'zavrsavanje-fakulteta',\n        name: 'Zavrsavanje fakulteta',\n        tasks: [\n            {   \n                title: 'Example 4',\n                description: 'Description example',\n                dueDate: new Date(),\n                priority: 'Medium',\n                notes: [\n                    {\n                        text: 'Note 1'\n                    }\n                ]\n            },\n            {   \n                title: 'Neki task',\n                description: 'Description example',\n                dueDate: new Date(),\n                priority: 'Medium',\n                notes: [\n                    {\n                        text: 'Note 1'\n                    }\n                ]\n            },\n            {   \n                title: 'Jos neki random',\n                description: 'Description example',\n                dueDate: new Date(),\n                priority: 'Medium',\n                notes: [\n                    {\n                        text: 'Note 1'\n                    }\n                ]\n            }\n           ]\n    },\n    {\n        id: 'morning',\n        name: 'Morning'\n    }\n]\n\nconst headers = document.querySelectorAll('.header');\nconst footers = document.querySelectorAll('.footer');\n\nheaders.forEach(header => new _modules_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](header));\nfooters.forEach(footer => new _modules_footer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](footer));\n\nnew _modules_projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"](projects);\n\n\n//# sourceURL=webpack://todoapp/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/addNewProject.js":
/*!*****************************************!*\
  !*** ./src/js/modules/addNewProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomEl */ \"./src/js/modules/createDomEl.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/js/index.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/js/modules/projects.js\");\n\n\n\n\nclass addNewProject {\n    constructor() {\n        this.main = document.querySelector('.main');\n        this.createPopUp();\n    }\n    createPopUp() {\n        const modalTitle = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Enter the new project name', clsName:'project__label'\n    });\n        const projNameInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'input', attribute:'type', attributeVal:'text', clsName:'project__add-input'});\n        const projectConfirmInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'button', attribute:'type',attributeVal:'button', clsName:'js-new-proj', content:'confirm'});\n        const popUpContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__modal',child:[projNameInput,projectConfirmInput, modalTitle]});\n        const popUpBody = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__body', child:popUpContainer});\n        this.main.appendChild(popUpBody);\n        projectConfirmInput.onclick = this.handleModalConfirmButton;\n    }\n    handleModalConfirmButton(e) {\n        const popUpBody = document.querySelector('.project__body');\n        const popUpInput = document.querySelector('.project__add-input');\n        const validateProjectInput = (element) => {\n            if(element.value) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n        const renderValidationMessage = () => {\n            if(document.querySelector('.project__val-msg')) return false;\n            const popUpModal = document.querySelector('.project__modal');\n            const valMsg = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName: 'project__val-msg', content: 'Please enter the new projects name'})\n            popUpModal.appendChild(valMsg);\n        }\n        const reRenderProjects = (val) => {\n            const newProjectName = \n            {\n                id: Math.random(),\n                name: val,\n                tasks: []\n            }\n            ___WEBPACK_IMPORTED_MODULE_1__.projects.push(newProjectName);\n            _projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reRenderProjects(___WEBPACK_IMPORTED_MODULE_1__.projects);\n        }\n\n        if(validateProjectInput(popUpInput)) {\n            popUpBody.remove();\n            reRenderProjects(popUpInput.value);\n        } else {\n            renderValidationMessage();\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewProject);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/addNewProject.js?");

/***/ }),

/***/ "./src/js/modules/addNewTask.js":
/*!**************************************!*\
  !*** ./src/js/modules/addNewTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomEl */ \"./src/js/modules/createDomEl.js\");\n\n\nclass AddNewTask {\n    constructor() {\n        \n    }\n    static createNewTaskButton() {\n        const addNewTaskButton = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'button',\n            clsName: 'task__add-btn',\n            attribute: 'type',\n            attributeVal: 'button',\n            content: 'add new task',\n            eventName: 'click',\n            eventCallback: ''\n        })\n        return addNewTaskButton;\n    }\n    createNewTaskPopUp() {\n            const modalTitle = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'label', content:'Enter the new task name', clsName:'project__label'\n        });\n            const taskNameInput = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'input', attribute:'type', attributeVal:'text', clsName:'project__add-input'});\n            const taskConfirmationButton = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'button', attribute:'type',attributeVal:'button', clsName:'js-new-proj', content:'confirm', event:'click',eventCallback:this.handleModalConfirmButton});\n            const popUpContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__modal',child:[taskNameInput,taskConfirmationButton, modalTitle]});\n            const popUpBody = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName:'project__body', child:popUpContainer});\n            this.main.appendChild(popUpBody);\n            taskConfirmationButton.onclick = this.handleModalConfirmButton;\n        const newTaskPopUp = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: ''\n        })\n    }\n    handleModalConfirmButton(e) {\n        const popUpBody = document.querySelector('.project__body');\n        const popUpInput = document.querySelector('.project__add-input');\n        const validateProjectInput = (element) => {\n            if(element.value) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n        const renderValidationMessage = () => {\n            if(document.querySelector('.project__val-msg')) return false;\n            const popUpModal = document.querySelector('.project__modal');\n            const valMsg = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName:'div', clsName: 'project__val-msg', content: 'Please enter the new projects name'})\n            popUpModal.appendChild(valMsg);\n        }\n        const reRenderProjects = (val) => {\n            const newProjectName = \n            {\n                id: Math.random(),\n                name: val,\n                tasks: []\n            }\n            projects.push(newProjectName);\n            new Projects(projects);\n        }\n\n        if(validateProjectInput(popUpInput)) {\n            popUpBody.remove();\n            reRenderProjects(popUpInput.value);\n        } else {\n            renderValidationMessage();\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNewTask);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/addNewTask.js?");

/***/ }),

/***/ "./src/js/modules/createDomEl.js":
/*!***************************************!*\
  !*** ./src/js/modules/createDomEl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass domCreator {\n    static createElement({tagName, clsName, content, child, eventName, \n        eventCallback, attribute,attributeVal}) {\n        const element = document.createElement(tagName);\n        if (Array.isArray(clsName)) {\n            clsName.forEach(cls => {\n                element.classList.add(cls);\n            })\n        } else {\n            element.classList.add(clsName);\n        }\n        if (content) {\n            element.textContent = content;\n        }\n        if(child) {\n            if(Array.isArray(child)) {\n                child.forEach(childElement => {\n                    if(childElement) {\n                        element.appendChild(childElement);\n                    }\n                });\n            } else {\n                element.appendChild(child);\n            }\n        }\n        if(eventName && eventCallback) {\n            element.addEventListener(eventName, eventCallback);\n        }\n        if(attribute) {\n            element.setAttribute(attribute, attributeVal);\n        }\n        return element;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domCreator);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/createDomEl.js?");

/***/ }),

/***/ "./src/js/modules/footer.js":
/*!**********************************!*\
  !*** ./src/js/modules/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Footer {\n    constructor(element) {\n        this.init();\n    }\n    init() {\n        console.log('Hello, I am the footer js file')\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/footer.js?");

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/logo.jpg */ \"./src/assets/images/logo.jpg\");\n\n\nclass Header {\n    constructor(element) {\n        this.logoContainer = element.querySelector('.header__logo');\n        this.init();\n    }\n    init() {\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/header.js?");

/***/ }),

/***/ "./src/js/modules/project.js":
/*!***********************************!*\
  !*** ./src/js/modules/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomEl */ \"./src/js/modules/createDomEl.js\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList */ \"./src/js/modules/taskList.js\");\n/* harmony import */ var _projectRenderLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectRenderLogic */ \"./src/js/modules/projectRenderLogic.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\n\n\n\n\nclass Project {\n    static default = 'odin';\n    constructor({id, name, tasks}) {\n        this.name = name;\n        this.tasks = tasks;\n        this.id = id;\n        this.active = id == Project.default;\n        this.parent = document.querySelector('.js-projects');\n        this.renderProject();\n        if(this.active) {\n            this.renderTaskListForProject();\n        }\n    }\n    static setDefault(value) {\n        Project.default = value;\n    }\n    renderProject() {\n        this.parent.appendChild(this.createDomForProject());\n    }\n    renderTaskListForProject() {    \n        new _taskList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.tasks);\n    }\n    createDomForProject() {\n        const classes = this.active ? ['project__item', 'active']:'project__item'\n        const projectProps = {\n            tagName: 'button',\n            clsName: classes,\n            content: this.name,\n            eventName: 'click',\n            eventCallback:_projectRenderLogic__WEBPACK_IMPORTED_MODULE_2__.handleProjectBtnClick,\n            attribute: 'data-project',\n            attributeVal: this.id\n        }\n        const project = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(projectProps);\n        return project;\n    };\n    static clearCurrentTasks() {\n        const tasks = document.querySelector('.js-todos');\n        tasks.innerHTML = '';\n    }\n    static getTasksForProject(id) {\n       const newActiveProj = _index__WEBPACK_IMPORTED_MODULE_3__.projects.find((item) => item.id == id);\n       return newActiveProj.tasks;\n    }\n    static reRenderTasks(id) {\n        this.clearCurrentTasks();\n        const newActiveTasks = this.getTasksForProject(id);\n        new _taskList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newActiveTasks);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/project.js?");

/***/ }),

/***/ "./src/js/modules/projectRenderLogic.js":
/*!**********************************************!*\
  !*** ./src/js/modules/projectRenderLogic.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAddProjectClick: () => (/* binding */ handleAddProjectClick),\n/* harmony export */   handleProjectBtnClick: () => (/* binding */ handleProjectBtnClick)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/modules/project.js\");\n/* harmony import */ var _addNewProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewProject */ \"./src/js/modules/addNewProject.js\");\n\n\n\nfunction handleProjectBtnClick(e) {\n    const projectsContainer = document.querySelector('.js-projects');\n        handleActiveProj(e.target);\n}   \nfunction handleAddProjectClick() {\n    new _addNewProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n}\n\n\nconst handleActiveProj = (current) => {\n    manageActiveButtonStyle(current);\n    _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reRenderTasks(current.dataset.project);\n}\n\nconst manageActiveButtonStyle = (element) => {\n    const allProjButtons = document.querySelectorAll('.project__item');\n    allProjButtons.forEach(el => {\n        el.classList.remove('active');\n    })\n    element.classList.add('active');\n}\n\n\n//# sourceURL=webpack://todoapp/./src/js/modules/projectRenderLogic.js?");

/***/ }),

/***/ "./src/js/modules/projects.js":
/*!************************************!*\
  !*** ./src/js/modules/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomEl */ \"./src/js/modules/createDomEl.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/js/modules/project.js\");\n/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewTask */ \"./src/js/modules/addNewTask.js\");\n/* harmony import */ var _projectRenderLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectRenderLogic */ \"./src/js/modules/projectRenderLogic.js\");\n\n\n\n\nclass Projects {\n    constructor(projects) {\n        this.main = document.querySelector('.main');\n        this.projects = projects;\n        this.createProjectsDom();\n    }\n    renderProjects() {\n        this.projects.forEach(proj => {\n            new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](proj);\n        });\n    }\n    createProjectsDom() {\n        let projectsDom =  _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'div',\n            clsName: ['projects', 'js-projects']\n        })\n        let taskListContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'section',\n            clsName: 'js-todos'\n        })\n        if(!this.checkIfElementExists('projects')) {\n            this.main.appendChild(projectsDom);\n        } else {\n            this.clearExistingProjects();\n            projectsDom = document.querySelector('.projects');\n        }\n        this.main.appendChild(this.createAddProjectButton());\n        if(!this.checkIfElementExists('js-todos')) {\n            this.main.appendChild(taskListContainer);\n        } else {\n            taskListContainer = document.querySelector('.js-todos');\n        }\n        this.renderProjects();\n        taskListContainer.appendChild(_addNewTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createNewTaskButton());\n    }\n    createAddProjectButton() {\n        const button = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'button',\n            clsName: ['project__add', 'js-add-proj'],\n            attribute: 'type',\n            attributeVal: 'button',\n            content: 'add project',\n            eventName: 'click',\n            eventCallback: _projectRenderLogic__WEBPACK_IMPORTED_MODULE_3__.handleAddProjectClick\n        })\n        const buttonContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n            tagName: 'div',\n            clsName: 'project__btn-wrap',\n            child: button\n        })\n        return buttonContainer;\n    }\n    checkIfElementExists(cls) {\n        if(document.querySelector(`.${cls}`)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n    clearExistingProjects() {\n        const projects = document.querySelector('.projects');\n        projects.innerHTML = '';\n    }\n    static reRenderProjects(projArr) {\n        this.clearProjects(); \n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setDefault(projArr[projArr.length - 1].id);  \n        _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearCurrentTasks();\n        projArr.forEach(proj => {\n            new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](proj);\n        })    \n    }\n    static clearProjects() {\n        const projectItems = document.querySelectorAll('.project__item');\n        projectItems.forEach(item => {\n            item.remove();\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/projects.js?");

/***/ }),

/***/ "./src/js/modules/task.js":
/*!********************************!*\
  !*** ./src/js/modules/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomEl */ \"./src/js/modules/createDomEl.js\");\n\n\nclass Task {\n    constructor({title, description, dueDate, priority, notes}) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.checked = false;\n    }\n    createTask() {\n        const titleEl = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName: 'h2', content: this.title});\n        const descEl = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName: 'p', content: this.description});\n        const priorityEl = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({tagName: 'p', clsName:'task__priority', content: this.priority});\n        const nodeItem = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\n            {\n                tagName: 'div', \n                clsName: 'task__item',\n                child: [\n                    titleEl,\n                    descEl,\n                    priorityEl\n                ]\n            });\n        return nodeItem;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/task.js?");

/***/ }),

/***/ "./src/js/modules/taskList.js":
/*!************************************!*\
  !*** ./src/js/modules/taskList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomEl */ \"./src/js/modules/createDomEl.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/js/modules/task.js\");\n\n  \n\nclass TaskList {\n    constructor(tasks) {\n        this.parent = document.querySelector('.js-todos');\n        this.tasks = tasks;\n        this.createTaskList();\n    }\n\n    createTaskList() {\n        if(!this.tasks) return;\n        const taskItems = this.tasks.map((taskItem) => {\n           const item = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskItem);\n           return item.createTask();\n        })\n        const containerProps = {\n            tagName: 'div',\n            clsName: 'task__items',\n            child: taskItems\n        }\n        const taskItemsContainer = _createDomEl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(containerProps);\n        this.parent.appendChild(taskItemsContainer);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);\n\n//# sourceURL=webpack://todoapp/./src/js/modules/taskList.js?");

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