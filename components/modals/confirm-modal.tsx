"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
};

export const ConfirmModal = ({ 
    children, 
    onConfirm 
}: ConfirmModalProps) => {
    const handleConfirm = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        onConfirm();
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild onClick={(e) => e.stopPropagation()}>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}