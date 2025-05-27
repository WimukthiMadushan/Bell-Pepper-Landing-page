'use client';
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Droplets, Network, Leaf, BarChart3, ArrowRight, CheckCircle, CloudRain, Bell, Layers, Zap, Radio, Minus, Plus } from "lucide-react";
import Hero from "./Images/Hero.jpg"
import WT from "./Images/WaterTank.jpg"
import PH from "./Images/PH.jpg"
import Image from "next/image";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const faqs = [
    {
      question: "How does the line-following robot with arms work for soil sampling?",
      answer: "Our line-following robot autonomously navigates predefined paths in your farm using advanced sensors. The robotic arms collect soil samples at strategic locations and measure various soil metrics like moisture, nutrients, and temperature. All data is then transmitted to the cloud via our power-optimized LoRa gateway for analysis."
    },
    {
      question: "What makes your LoRa gateway 15x more power-optimized?",
      answer: "Our LoRa gateway uses advanced power management techniques including sleep mode optimization, efficient data compression, and smart transmission scheduling. This results in 15x better power efficiency compared to standard LoRa gateways, ensuring longer battery life and reduced maintenance costs."
    },
    {
      question: "How many pH sensors are needed for effective monitoring?",
      answer: "The number of pH sensors depends on your farm size and layout. Typically, we recommend one sensor per 50-100 square meters for optimal coverage. Our fixed pH sensors provide real-time monitoring and are strategically placed to ensure comprehensive soil pH tracking across your bell pepper cultivation area."
    },
    {
      question: "What types of water are used in the multi-tank system?",
      answer: "Our multi-tank system includes four types of water sources: rainwater collection tank, municipal water supply tank, acid solution tank, and basic solution tank. The system automatically mixes these to achieve the optimal pH level for bell pepper cultivation, typically between 6.0-6.8 pH."
    },
    {
      question: "How quickly does the system respond to pH changes?",
      answer: "Our system provides real-time monitoring with response times under 5 minutes. When pH sensors detect values outside the optimal range, the automated water mixing system immediately begins preparing and delivering pH-corrected water to maintain ideal growing conditions for your bell peppers."
    },
    {
      question: "Is the system suitable for different farm sizes?",
      answer: "Yes, our SmartBell system is scalable and can be customized for farms ranging from small-scale operations to large commercial bell pepper farms. The number of robots, pH sensors, and tank capacity can be adjusted based on your specific requirements and farm size."
    },
    {
      question: "What maintenance is required for the system?",
      answer: "The system requires minimal maintenance due to its power-optimized design. Regular tasks include cleaning pH sensors monthly, checking tank levels, and occasional robot calibration. The LoRa gateway and robotic systems are designed for autonomous operation with self-diagnostic capabilities."
    },
    {
      question: "How does the system improve bell pepper quality and yield?",
      answer: "By maintaining optimal soil pH levels and providing precise nutrient management, our system ensures bell peppers receive ideal growing conditions. This results in up to 40% higher yields, 85% better fruit quality, improved color consistency, and enhanced taste compared to traditional farming methods."
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Power Green</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#technology" className="text-gray-600 hover:text-green-600 transition-colors">Technology</a>
              <a href="#faq" className="text-gray-600 hover:text-green-600 transition-colors">FAQ</a>
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
                <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 cursor-pointer">
                  🌶️ Smart Agriculture Revolution
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight cursor-pointer">
                  Perfect Bell Pepper
                  <span className="text-green-600"> Cultivation</span>
                  <br />
                  with Smart Robotics
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Revolutionize your bell pepper farming with line-following robots for soil sampling, 
                  fixed pH sensors, automated multi-tank water systems, and power-optimized LoRa gateway 
                  for optimal crop yields.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 cursor-pointer">
                  Start Growing Smarter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-gray-300 hover:border-green-300 cursor-pointer">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Real-time pH monitoring</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Multi-tank water system</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-blue-500 rounded-2xl blur-3xl opacity-20" />
              <Image
                src={Hero}
                alt="Line-following robot with arms"
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 cursor-pointer">
              🚀 Advanced Technology
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Complete Smart Farming Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated system combines line-following robots, fixed pH sensors, power-optimized 
              LoRa gateway, and multi-tank water systems to optimize bell pepper cultivation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Line-Following Robot */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Arm Robot</CardTitle>
                <CardDescription className="text-gray-600">
                  Autonomous robot with arms for soil sample collection and data transmission
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <Image
                    src={Hero}
                    alt="Robotic arm system for agriculture"
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
                    <span>Robotic arms for soil sampling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Multiple metrics measurement & cloud sync</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Multi-Tank Water System */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Multi-Tank Water System</CardTitle>
                <CardDescription className="text-gray-600">
                  Automated water mixture from rain water, supply water, acid and basic solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <Image
                    src={WT}
                    alt="Industrial tank system for water storage"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Rain water & supply water tanks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Acid & basic solution tanks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>pH-optimized water mixing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Power-Optimized LoRa Gateway */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Radio className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Power-Optimized LoRa Gateway</CardTitle>
                <CardDescription className="text-gray-600">
                  15x power-optimized communication hub for all data transmission
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                  <div className="relative">
                    <Radio className="h-20 w-20 text-purple-400" />
                    <div className="absolute -top-2 -right-2">
                      <Zap className="h-8 w-8 text-yellow-500 animate-pulse" />
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>15x power optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Long-range LoRa communication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Secure data transmission</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Fixed pH Sensors Section */}
          <div className="mt-16">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50">
                📡 Fixed Monitoring Network
              </Badge>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Strategic pH Sensor Network
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fixed pH sensors placed at strategic locations throughout the farm provide 
                real-time soil pH monitoring for precise irrigation control.
              </p>
            </div>

            <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-r from-orange-50 to-red-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Real-time pH Monitoring</h4>
                        <p className="text-gray-600">Continuous soil pH measurement at multiple farm locations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Network className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">LoRa Network Integration</h4>
                        <p className="text-gray-600">Power-optimized data transmission to the cloud</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Automated Response</h4>
                        <p className="text-gray-600">Instant trigger of water mixing system based on pH data</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={PH}
                      alt="pH sensor network in farm"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-xl" />
                  </div>
                </div>
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
              Why Choose Power Green System?
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
              How System Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intelligent system follows a seamless automated process combining line-following 
              robots, fixed sensors, and power-optimized communication for perfect bell pepper cultivation.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                1
              </div>
              <Card className="pt-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Bot className="h-10 w-10 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Robot Sampling</CardTitle>
                  <CardDescription className="text-gray-600">
                    Line-following robot with arms collects soil samples and measures various metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Line-following navigation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Robotic arm soil collection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                2
              </div>
              <Card className="pt-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <BarChart3 className="h-10 w-10 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">pH Monitoring</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fixed pH sensors across the farm provide real-time soil pH measurements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span>Real-time pH sensing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span>Multiple sensor locations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                3
              </div>
              <Card className="pt-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Radio className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">LoRa Gateway</CardTitle>
                  <CardDescription className="text-gray-600">
                    Power-optimized LoRa gateway transmits all data to the cloud efficiently
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>15x power optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>Cloud synchronization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="relative h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                4
              </div>
              <Card className="pt-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-500">
                    <Droplets className="h-10 w-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Water Mixing</CardTitle>
                  <CardDescription className="text-gray-600">
                    Multi-tank system automatically creates pH-optimized water mixture
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span>4-tank mixing system</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span>Automated delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
              ❓ Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our smart bell pepper cultivation system, 
              from technical specifications to implementation details.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900 text-left">
                      {faq.question}
                    </CardTitle>
                    <div className="flex-shrink-0 ml-4">
                      {openFaq === index ? (
                        <Minus className="h-5 w-5 text-green-600" />
                      ) : (
                        <Plus className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Contact Our Experts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                🌱 Advanced Bell Pepper Cultivation
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Precision Agriculture for Premium Bell Peppers
              </h2>
              <p className="text-lg text-gray-600">
                Our system combines line-following robots, fixed pH sensors, power-optimized LoRa 
                communication, and multi-tank water systems to maintain perfect soil conditions 
                for exceptional bell pepper quality.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Monitoring Network</h3>
                    <p className="text-gray-600">Fixed pH sensors and robotic sampling provide comprehensive soil data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Power-Optimized Communication</h3>
                    <p className="text-gray-600">15x power-optimized LoRa gateway ensures reliable data transmission</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Droplets className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-Tank Water System</h3>
                    <p className="text-gray-600">Rain water, supply water, acid & basic solutions for perfect pH balance</p>
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
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 text-lg px-8">
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
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/a4319558-a12d-46b1-9d97-8d34bac91ce9.png" 
                  alt="Power Green Logo"
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-white">power green</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing bell pepper cultivation through intelligent automation and IoT technology.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Data Collecting Robot</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">pH Monitoring Sensors</a></li>
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
            <p>&copy; 2024 power green. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

