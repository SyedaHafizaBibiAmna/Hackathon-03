// components/SignInButtonWrapper.tsx (Server Component)
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function SignInButtonWrapper() {
  return (
    <SignInButton mode="modal">
      <Button variant="outline" className="flex items-center gap-2 px-4 py-2">
        <span className="hidden sm:inline">Sign In</span>
      </Button>
    </SignInButton>
  );
}