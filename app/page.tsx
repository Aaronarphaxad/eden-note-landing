"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Mic,
  Cloud,
  Download,
  Heart,
  Coffee,
  Users,
  Shield,
  Smartphone,
  FileText,
  Send,
  Play,
  CheckCircle,
  BookOpen,
  Lightbulb,
  Bell,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/logo.webp"
                alt="EdenNote Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full ring-2 ring-blue-100"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EdenNote</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="#tutorial" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium relative group">
              Tutorial
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="#request" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium relative group">
              Request Feature
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Button variant="outline" size="sm" asChild className="bg-white border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-colors">
              <Link href="#support">Support</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-purple-50/80"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 hover:from-green-200 hover:to-emerald-200 border-0 shadow-sm px-4 py-2 text-sm font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  100% Free Forever
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Capture Every
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent"> Sacred Moment</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  EdenNote – Where ideas grow. The ultimate mobile note-taking app for sermons, Bible study, and
                  spiritual growth. Available on iOS and Android. Record audio, insert verses, save insights, and never
                  miss a divine message again.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* App Store Button */}
                <Button
                  size="lg"
                  className="group flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-gray-900 to-black text-white hover:from-gray-800 hover:to-gray-900 border-0 rounded-xl w-full sm:min-w-[220px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90 font-medium">Download on the</div>
                    <div className="text-lg font-bold -mt-0.5">App Store</div>
                  </div>
                </Button>

                {/* Google Play Button */}
                <Button
                  size="lg"
                  className="group flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-gray-900 to-black text-white hover:from-gray-800 hover:to-gray-900 border-0 rounded-xl w-full sm:min-w-[220px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90 font-medium">Get it on</div>
                    <div className="text-lg font-bold -mt-0.5">Google Play</div>
                  </div>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">No Login Required</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                  <Cloud className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Works Offline</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                  <Smartphone className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">iOS & Android</span>
                </div>
              </div>
            </div>

            <div className="relative lg:scale-105">
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-200/50">
                <Image
                  src="/hero image.webp"
                  alt="EdenNote App Interface"
                  width={300}
                  height={400}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="relative py-20 sm:py-24 px-4 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="absolute inset-0 bg-grid-gray-100/25 bg-grid-16"></div>
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6 px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need for 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Spiritual Growth</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Designed specifically for believers who want to capture and organize their spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <Card className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-blue-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Audio Recording</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">Record sermons and Bible studies with crystal clear audio quality</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-purple-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Bible Verse Integration</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Instantly insert any Bible verse into your notes with our built-in search
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-yellow-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Smart Insights</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Save powerful quotes and key messages as insights, with smart reminders to revisit them
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-green-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Cloud & Local Backup</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">Sync your notes across devices or keep them local - your choice</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-orange-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Offline Bible Access</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">Download multiple Bible translations and access them anywhere</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-red-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Completely Free</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">No subscriptions, no hidden fees, no login required - forever free</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-indigo-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Smart Organization</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">Organize notes by date, topic, or scripture reference automatically</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-teal-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Insight Reminders</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Get gentle reminders about your saved insights to keep key messages fresh in your mind
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights Feature Highlight */}
      <section className="relative py-20 sm:py-24 px-4 bg-gradient-to-br from-yellow-50/80 via-orange-50/50 to-amber-50/80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-orange-200/10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 hover:from-yellow-200 hover:to-orange-200 border-0 px-4 py-2 text-sm font-semibold">
                  New Feature
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Never Forget a 
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"> Divine Message</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                Capture powerful quotes and key insights from sermons, then let EdenNote remind you to revisit them.
                Turn fleeting moments of inspiration into lasting spiritual growth.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Save Key Quotes</h4>
                    <p className="text-gray-600 leading-relaxed">Highlight and save impactful quotes as insights while taking notes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Smart Reminders</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Get gentle notifications to revisit your insights and reflect on key messages
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Easy Access</h4>
                    <p className="text-gray-600 leading-relaxed">Quickly return to your original notes from any insight reminder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:scale-105">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-200/50">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Bell className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium">Insight Reminder</span>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 rounded-r-2xl shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 mb-2 text-lg leading-relaxed">
                          "Faith is taking the first step even when you don't see the whole staircase."
                        </p>
                        <p className="text-gray-600 mb-4">From Sunday's sermon on courage</p>
                        <Button size="sm" variant="outline" className="bg-white hover:bg-gray-50 border-gray-200 text-gray-700 shadow-sm">
                          View Full Notes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Tutorial Preview */}
      <section id="tutorial" className="relative py-20 sm:py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-purple-100/10"></div>
        
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6 px-4 py-2">
              <Play className="w-4 h-4 mr-2" />
              Tutorial
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Simple to Use, 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Powerful Results</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">Get started in minutes with our intuitive interface</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Open & Record</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch the app and start recording your sermon or Bible study with one tap
              </p>
            </div>

            <div className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Take Notes</h3>
              <p className="text-gray-600 leading-relaxed">Write your thoughts and easily insert relevant Bible verses as you listen</p>
            </div>

            <div className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Save Insights</h3>
              <p className="text-gray-600 leading-relaxed">Highlight powerful quotes and key messages to remember later</p>
            </div>

            <div className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Get Reminded</h3>
              <p className="text-gray-600 leading-relaxed">Receive gentle reminders to revisit your insights and grow spiritually</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="group text-lg px-8 py-4 bg-white hover:bg-blue-50 border-blue-200 hover:border-blue-300 text-blue-700 hover:text-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Watch Full Tutorial
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Request Section */}
      <section id="request" className="relative py-20 sm:py-24 px-4 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/5 via-transparent to-purple-100/5"></div>
        
        <div className="relative container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-6 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Community
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Help Shape 
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> the Future</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your feedback drives our development. Request features that matter to you.
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center text-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                Request a Feature
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 leading-relaxed">Tell us what would make EdenNote even better for your spiritual journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Your Name (Optional)" className="h-12 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200" />
                <Input placeholder="Your Email (Optional)" className="h-12 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200" />
              </div>
              <Input placeholder="Feature Title" className="h-12 rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200" />
              <Textarea
                placeholder="Describe your feature request in detail. How would this help you in your spiritual growth?"
                rows={4}
                className="rounded-xl border-gray-200 focus:border-purple-300 focus:ring-purple-200 resize-none"
              />
              <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <Send className="w-5 h-5 mr-2" />
                Submit Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="relative py-20 sm:py-24 px-4 bg-gradient-to-br from-orange-50/80 via-red-50/50 to-pink-50/80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/10 via-transparent to-red-200/10"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-300/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto max-w-5xl text-center px-4 sm:px-6">
          <div className="mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Keep EdenNote 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Free</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              EdenNote will always be free, but your support helps us maintain servers, add new features, and keep the
              app available for everyone.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-3xl p-8 sm:p-10 shadow-2xl mb-12 border border-white/50">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                <Coffee className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Buy Me a Coffee</h3>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Support the development of EdenNote and help keep it free for the entire community
            </p>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-12 py-4 w-full sm:w-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open("https://coff.ee/aaronomale", "_blank")}
            >
              <Coffee className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Support on Buy Me a Coffee
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50">
            <h3 className="text-xl font-bold mb-6 text-gray-900 text-center">Why Support EdenNote?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-600 leading-relaxed">Keep the app completely free for everyone</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-600 leading-relaxed">Fund new feature development</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-600 leading-relaxed">Maintain cloud backup services</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-600 leading-relaxed">Support the developer's ministry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Aaron Omale</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200/50">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                <span className="text-4xl sm:text-5xl font-bold text-white">AO</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Hey there!</h3>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                  I'm building a simple, distraction-free app to help people take meaningful notes during church
                  services. No ads, no noise, just the Word and your words.
                </p>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  If you like the idea and want to help keep the app available (or keep me caffeinated), feel free to
                  buy me a coffee ☕🙏
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/logo.webp"
                  alt="EdenNote Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full ring-2 ring-white/20"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">EdenNote</span>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              EdenNote – Where ideas grow. Empowering believers to capture and grow from every spiritual moment.
            </p>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-gray-400 mb-8">
              <Link href="#" className="hover:text-blue-400 transition-colors duration-200 font-medium">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors duration-200 font-medium">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors duration-200 font-medium">
                Contact
              </Link>
              <Link href="#support" className="hover:text-blue-400 transition-colors duration-200 font-medium">
                Support
              </Link>
            </div>

            <div className="border-t border-gray-700/50 pt-8 text-center text-gray-400">
              <p className="text-lg">&copy; {new Date().getFullYear()} EdenNote. Made with ❤️ for the body of Christ.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}



