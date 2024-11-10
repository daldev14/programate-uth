export enum CourseIcon {
  bash = "bash",
  database = "database",
  git = "git",
  java = "java",
  javascript = "javascript",
  linux = "linux",
  nodejs = "nodejs",
  python = "python",
  react = "react",
  vuejs = "vuejs",
}

export type CourseDetails = {
  name: string;
  subtitle: string;
  certificateURL: string;
  stage: number;
  url: string;
  iconName: CourseIcon;
};
