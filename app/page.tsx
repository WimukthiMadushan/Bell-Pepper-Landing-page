import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Droplets, Network, Leaf, BarChart3, Shield, ArrowRight, CheckCircle, CloudRain, Bell, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">SmartBell</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#technology" className="text-gray-600 hover:text-green-600 transition-colors">Technology</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                  🌶️ Smart Agriculture Revolution
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Perfect Bell Pepper
                  <span className="text-green-600"> Cultivation</span>
                  <br />
                  with AI & Robotics
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Revolutionize your bell pepper farming with our intelligent pH monitoring robots, 
                  automated water mixing systems, and powerful IoT gateway for optimal crop yields.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  Start Growing Smarter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-gray-300 hover:border-green-300">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Real-time pH monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Automated water mixing</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-blue-500 rounded-2xl blur-3xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop" 
                alt="Smart farming robot"
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
              🚀 Advanced Technology
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Complete Smart Farming Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated system combines robotics, IoT, and data analytics to optimize every aspect 
              of your bell pepper cultivation process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* pH Monitoring Robot */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">pH Monitoring Robot</CardTitle>
                <CardDescription className="text-gray-600">
                  Autonomous soil sampling and pH measurement across your entire vineyard
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop" 
                    alt="pH monitoring robot"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Line-following navigation system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Real-time soil sample collection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Instant pH measurement & cloud sync</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Automated Water System */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Smart Water Mixing</CardTitle>
                <CardDescription className="text-gray-600">
                  Automated water mixture preparation based on real-time pH data
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=200&fit=crop" 
                    alt="Smart water mixing system"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Multiple tank management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>pH-optimized water preparation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Automated distribution system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Gateway */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">IoT Data Gateway</CardTitle>
                <CardDescription className="text-gray-600">
                  Powerful communication hub for optimized data center connectivity
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                  <Network className="h-20 w-20 text-purple-400" />
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Real-time data transmission</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Optimized cloud connectivity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Secure data communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-bounce">
            <Bell className="h-16 w-16 text-green-500" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <CloudRain className="h-20 w-20 text-blue-500" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-bounce delay-1000">
            <Layers className="h-12 w-12 text-purple-500" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
              🎯 Smart Agriculture Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose SmartBell System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your bell pepper cultivation with measurable improvements in yield, 
              quality, and efficiency through our intelligent farming solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <span className="text-2xl font-bold text-white">40%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Higher Yield</h3>
              <p className="text-gray-600 text-sm">Optimized pH levels result in significantly better crop production</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse delay-300">
                <span className="text-2xl font-bold text-white">60%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Water Savings</h3>
              <p className="text-gray-600 text-sm">Precise water mixture reduces waste and optimizes resource usage</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse delay-500">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Monitoring</h3>
              <p className="text-gray-600 text-sm">Continuous automated monitoring ensures optimal growing conditions</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto animate-pulse delay-700">
                <span className="text-2xl font-bold text-white">85%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Quality Boost</h3>
              <p className="text-gray-600 text-sm">Premium bell peppers with consistent size, color, and taste</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=800&fit=crop" 
            alt="Farmland background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
              ⚡ Automated Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              How SmartBell Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intelligent system follows a seamless automated process to ensure 
              your bell peppers receive the perfect growing conditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                1
              </div>
              <Card className="pt-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Bot className="h-10 w-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Robot Sampling</CardTitle>
                  <CardDescription className="text-gray-600">
                    Our autonomous robot follows predefined paths through your vineyard, 
                    collecting soil samples at strategic locations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop" 
                      alt="pH monitoring robot"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>GPS-guided navigation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Automated soil collection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                2
              </div>
              <Card className="pt-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Network className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Data Processing</CardTitle>
                  <CardDescription className="text-gray-600">
                    Real-time pH analysis and data transmission through our optimized 
                    IoT gateway to the cloud for instant processing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                    <Network className="h-24 w-24 text-blue-400 animate-pulse" />
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>Instant pH measurement</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>Cloud data synchronization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                3
              </div>
              <Card className="pt-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-500">
                    <Droplets className="h-10 w-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Automated Irrigation</CardTitle>
                  <CardDescription className="text-gray-600">
                    Based on pH data, our system automatically prepares and distributes 
                    the perfect water mixture for optimal bell pepper growth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop" 
                      alt="Smart irrigation system"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span>pH-optimized water mixing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span>Targeted irrigation delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                🌱 Better Bell Pepper Viticulture
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Science-Driven Agriculture for Premium Bell Peppers
              </h2>
              <p className="text-lg text-gray-600">
                Our system continuously monitors and optimizes soil pH levels, ensuring your bell peppers 
                receive the perfect growing conditions for maximum yield and quality.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Analytics</h3>
                    <p className="text-gray-600">Monitor pH levels, soil moisture, and growth metrics in real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Precision Control</h3>
                    <p className="text-gray-600">Automated systems ensure optimal growing conditions 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sustainable Farming</h3>
                    <p className="text-gray-600">Reduce waste and optimize resource usage for eco-friendly cultivation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-blue-500 rounded-2xl blur-3xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop" 
                alt="Beautiful bell peppers"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Bell Pepper Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the smart farming revolution and maximize your crop yields with our integrated IoT solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold text-white">SmartBell</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing bell pepper cultivation through intelligent automation and IoT technology.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">pH Monitoring Robot</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Water Mixing System</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">IoT Gateway</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SmartBell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
