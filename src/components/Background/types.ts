type BackgroundType = "default" | "success" | "fail" | "record" | "finish";

export interface BackgroundProps {
  type?: BackgroundType,
  isActive?: boolean
}