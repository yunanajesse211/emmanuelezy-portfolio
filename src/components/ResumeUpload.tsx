
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText, Upload, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from "@/hooks/use-toast";

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploaded(false);
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to upload",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    // Simulate file upload
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      toast({
        title: "Resume uploaded successfully",
        description: "Your resume has been updated",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-theme-blue hover:bg-theme-blue/80">
          <FileText className="mr-2 h-4 w-4" />
          Update Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Resume</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="resume">Resume (PDF format)</Label>
            <div className="flex items-center gap-2">
              <Input 
                id="resume" 
                type="file" 
                accept=".pdf" 
                onChange={handleFileChange}
                className="flex-1"
              />
            </div>
            {file && (
              <p className="text-sm text-muted-foreground">
                Selected file: {file.name}
              </p>
            )}
          </div>
          <Button 
            onClick={handleUpload}
            disabled={!file || uploading || uploaded} 
            className="w-full"
          >
            {uploading ? (
              <>Uploading...</>
            ) : uploaded ? (
              <><Check className="mr-2 h-4 w-4" /> Uploaded</>
            ) : (
              <><Upload className="mr-2 h-4 w-4" /> Upload Resume</>
            )}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Your resume will be available for download on your portfolio.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeUpload;
