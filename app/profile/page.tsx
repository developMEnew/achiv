'use client';

import { useSession, signOut } from "next-auth/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="container p-4 space-y-6">
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          {session.user?.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || "Profile"}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-500" />
            </div>
          )}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{session.user?.name}</h2>
            <p className="text-muted-foreground">{session.user?.email}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <Button
            variant="destructive"
            className="w-full"
            onClick={() => signOut()}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </Card>
    </div>
  );
}