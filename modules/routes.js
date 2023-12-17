import * as dao from "./dao.js";

function ModuleRoutes(app) {
  const findModulesByCourseId = async (req, res) => {
    const modules = await dao.findModulesByCourseId(req.params.courseId);
    res.json(modules);
  };

  const createModule = async (req, res) => {
    const module = await dao.createModule(
        {...req.body, course: req.params.courseId});
    res.json(module);
  };

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const status = await dao.updateModule(req.params.moduleId, req.body);
    res.json(status)
  }

  app.get("/api/courses/:courseId/modules", findModulesByCourseId);
  app.post("/api/courses/:courseId/modules", createModule);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule)
}

export default ModuleRoutes;