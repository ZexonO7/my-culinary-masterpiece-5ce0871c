import PhotoGallery from "@/components/PhotoGallery";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Photos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      <PhotoGallery />
    </div>
  );
};

export default Photos;