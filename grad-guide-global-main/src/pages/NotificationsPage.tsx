import { notifications } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Notifications</h1>
          <p className="text-muted-foreground text-sm">Stay updated on your placement journey</p>
        </div>
        <Button variant="outline" size="sm"><Check className="mr-1 h-3 w-3" /> Mark all read</Button>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => (
          <Card key={n.id} className={n.read ? "opacity-60" : "border-primary/20"}>
            <CardContent className="flex items-start gap-3 p-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${n.read ? "bg-muted" : "bg-primary/10"}`}>
                <Bell className={`h-4 w-4 ${n.read ? "text-muted-foreground" : "text-primary"}`} />
              </div>
              <div className="flex-1">
                <p className={`text-sm ${n.read ? "text-muted-foreground" : "font-medium"}`}>{n.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{n.createdAt}</p>
              </div>
              {!n.read && <span className="w-2 h-2 rounded-full bg-primary mt-1.5" />}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
