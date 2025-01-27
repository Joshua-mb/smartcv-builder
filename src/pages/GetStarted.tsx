import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const GetStarted = () => {
  const [hasCV, setHasCV] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Call your upload endpoint here
      toast({
        title: "Upload started",
        description: "Your CV is being processed...",
      });

      // Add actual upload logic here
      console.log("File ready for upload:", file.name);
      
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your CV",
        variant: "destructive",
      });
    }
  };

  if (hasCV === null) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Do you have a CV ready?</CardTitle>
            <CardDescription>
              Let us know if you already have a CV that you'd like to upload and optimize
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Button onClick={() => setHasCV(true)}>Yes, I have a CV</Button>
            <Button variant="outline" onClick={() => setHasCV(false)}>
              No, I need to create one
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (hasCV) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Upload your CV</CardTitle>
            <CardDescription>
              Upload your existing CV in PDF format and we'll help you optimize it
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <label htmlFor="cv-upload">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-gray-400 transition-colors">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    Click to upload your CV (PDF)
                  </span>
                </div>
              </div>
              <input
                id="cv-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create your CV</CardTitle>
          <CardDescription>
            Let's create a professional CV together using our smart builder
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button>Start Building</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GetStarted;