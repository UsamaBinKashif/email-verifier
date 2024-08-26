import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubscriptionPage() {
  return (
    <div className="container  mx-auto p-6 bg-gray-50 px-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Subscription</h1>
        <Button variant="outline" >Contact us</Button>
      </div>

      <h2 className="text-lg font-semibold mb-4">Your current plan</h2>

      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-bold">Free plan</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-600">Upgrade</Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Quotas</h3>
              <ul className="space-y-1 text-sm text-gray-500">

                <li>Verifications: 50 / month</li>
                <li>Email account: 1</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Credits over quota</h3>
              <p className="text-sm text-gray-500">Disabled</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="grid grid-cols-1 mb-6">
        <CardHeader>
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold ">Billing information</h2>
            <h2 className="text-lg font-semibold ">Payment card</h2>
          </div>
        </CardHeader>
        <div className="px-6">
          <div className="flex justify-between">
            <div>
              <p className="mb-2 text-base font-semibold">Company information</p>
              <p className="mb-4 text-sm text-gray-500">- Pakistan</p>
            </div>
            <Button variant="outline" size="sm" >Add card</Button>
          </div>
        </div>
      </Card>

      <Card >
        <CardHeader>
          <h2 className="text-lg font-semibold ">Invoices</h2>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-sm text-gray-500">No invoices, yet.</p>
        </CardContent>
      </Card>
    </div>
  )
}