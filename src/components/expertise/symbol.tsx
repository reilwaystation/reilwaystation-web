import React from "react";
import AfterEffects from "./aftereffects";
import Blender from "./blender";
import Django from "./django";
import Illustrator from "./illustrator";
import Indesign from "./indesign";
import NestJs from "./nestjs";
import NodeJs from "./nodejs";
import Photoshop from "./photoshop";
import Premiere from "./premiere";
import Python from "./python";
import ReactJs from "./reactjs";
import Skill from "./skill";
import TypeScript from "./typescript";

const Symbol = (props: any) => {
  switch (props.value) {
    case "nodejs":
      return <NodeJs />;
    case "typescript":
      return <TypeScript />;
    case "reactjs":
      return <ReactJs />;
    case "nestjs":
      return <NestJs />;
    case "python":
      return <Python />;
    case "django":
      return <Django />;
    case "photoshop":
      return <Photoshop />;
    case "illustrator":
      return <Illustrator />;
    case "indesign":
      return <Indesign />;
    case "premiere":
      return <Premiere />;
    case "aftereffects":
      return <AfterEffects />;
    case "blender":
      return <Blender />;
    default:
      return <Skill />;
  }
};

export default Symbol;
