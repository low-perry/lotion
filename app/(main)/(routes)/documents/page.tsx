"use client";

import Image from "next/image";
import { useUser} from "@clerk/clerk-react"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api"
import { toast } from "sonner";
import { useRouter } from "next/navigation";




const DocumentsPage = () => {
    
    const router = useRouter();
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({title: "Untitled"})
         .then((documentId) => router.push(`/documents/${documentId}`));

        toast.promise(promise, {
            loading: "Creating note...",
            success: "Note created",
            error: "Failed to create note"
        });
    }

    return ( 
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/triangle.png"
                height="300"
                width="300"
                alt="Triangle"
                className="dark:hidden"
                 
            />
            <Image 
                src="/triangle-d.png"
                height="300"
                width="300"
                alt="Triangle"
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Lotion
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>

        </div>
     );
}
 
export default DocumentsPage;