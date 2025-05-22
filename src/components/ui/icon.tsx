import React from "react";
import {
  Cube,
  Users,
  BookOpen,
  Download,
  ArrowRight,
  Star,
  Heart,
  Play,
  RocketIcon,
  CircleAlert,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap = {
  Cube,
  Users,
  BookOpen,
  Download,
  ArrowRight,
  Star,
  Heart,
  Play,
  RocketIcon,
  CircleAlert,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent =
    iconMap[name as keyof typeof iconMap] ||
    iconMap[fallback as keyof typeof iconMap];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
