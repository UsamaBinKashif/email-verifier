
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Bell, Cookie, Info, Key, Scale, Trash2 } from "lucide-react"
import AccountInfo from "./AccountInfo"

export default function AccountDetails() {
  return (
    <div className=" mx-auto p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-20 lg:mb-4 gap-2">
          <TabsTrigger value="account" className="flex-1 px-3 py-2">
            <Info className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="cookies" className="flex-1 px-3 py-2">
            <Cookie className="mr-2 h-4 w-4" />
            Cookies
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex-1 px-3 py-2">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="password" className="flex-1 px-3 py-2">
            <Key className="mr-2 h-4 w-4" />
            Password
          </TabsTrigger>
          <TabsTrigger value="legal" className="flex-1 px-3 py-2">
            <Scale className="mr-2 h-4 w-4" />
            Legal
          </TabsTrigger>
          <TabsTrigger value="delete" className="flex-1 px-3 py-2">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </TabsTrigger>
        </TabsList>
        <TabsContent value="cookies">
          <CookiesManagement />
        </TabsContent>
        <TabsContent value="account">
          <AccountInfo />
        </TabsContent>
        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
        <TabsContent value="password">
          <PasswordChange />
        </TabsContent>
        <TabsContent value="legal">
          <LegalCompliance />
        </TabsContent>
        <TabsContent value="delete">
          <DeleteAccount />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CookiesManagement() {
  return (
    <Card className="w-full lg:w-[968px] mx-auto">
      <CardHeader>
        <CardTitle>Cookies Management</CardTitle>
        <CardDescription>Manage how we use cookies to improve your experience.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="essential-cookies">Essential Cookies</Label>
          <Switch id="essential-cookies" defaultChecked disabled />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="analytics-cookies">Analytics Cookies</Label>
          <Switch id="analytics-cookies" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="marketing-cookies">Marketing Cookies</Label>
          <Switch id="marketing-cookies" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}



function NotificationSettings() {
  return (
    <Card className="w-full lg:w-[968px] mx-auto">
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage how you receive notifications.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notifications">Email Notifications</Label>
          <Switch id="email-notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-notifications">Push Notifications</Label>
          <Switch id="push-notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="sms-notifications">SMS Notifications</Label>
          <Switch id="sms-notifications" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-blue-600 hover:bg-blue-600/50">Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}

function PasswordChange() {
  return (
    <Card className="w-full lg:w-[968px] mx-auto">
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>Ensure your account is using a strong, secure password.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input id="current-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <Input id="confirm-password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button  className="bg-blue-600 hover:bg-blue-600/50">Change Password</Button>
      </CardFooter>
    </Card>
  )
}

function LegalCompliance() {
  return (
    <Card className="w-full lg:w-[968px] mx-auto">
      <CardHeader>
        <CardTitle>Legal & Compliance</CardTitle>
        <CardDescription>Review and manage your legal agreements and compliance settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Terms of Service</h3>
          <p className="text-sm text-muted-foreground">Last accepted: 01/01/2023</p>
          <Button variant="outline">View Terms</Button>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Privacy Policy</h3>
          <p className="text-sm text-muted-foreground">Last reviewed: 01/01/2023</p>
          <Button variant="outline">View Policy</Button>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="marketing-consent" />
          <Label htmlFor="marketing-consent">I agree to receive marketing communications</Label>
        </div>
      </CardContent>
    </Card>
  )
}

function DeleteAccount() {
  return (
    <Card className="w-full lg:w-[968px] mx-auto">
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>Permanently delete your account and all associated data.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-yellow-500">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm font-semibold">Warning: This action is irreversible</p>
        </div>
        <p className="text-sm text-muted-foreground">
          Deleting your account will remove all of your information from our database. This cannot be undone.
        </p>
        <div className="space-y-2">
          <Label htmlFor="delete-confirmation">Type "DELETE" to confirm</Label>
          <Input id="delete-confirmation" placeholder="DELETE" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="destructive">Delete Account</Button>
      </CardFooter>
    </Card>
  )
}