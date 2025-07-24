"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  PenTool,
  Github,
  Chrome,
  Rocket,
  Shield,
  Zap,
  Crown,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
      {/* Animated Mesh Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-40 w-64 h-64 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-2xl bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative h-14 w-14 bg-black rounded-2xl flex items-center justify-center">
                  <PenTool className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Excalidraw
                </span>
                <div className="text-xs text-gray-400 font-medium">
                  NEXT-GEN WHITEBOARD
                </div>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300 px-6 py-3 rounded-xl cursor-pointer "
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 overflow-y-none ">
        <div className="max-w-2xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            {/* <div className="mb-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 text-purple-200 px-6 py-3 text-lg font-bold backdrop-blur-sm">
              <Crown className="h-5 w-5 mr-2" />
              JOIN THE REVOLUTION
            </div> */}

            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight mt-3 ">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                CREATE YOUR
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                ACCOUNT
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Enter the next dimension of creativity
            </p>
          </div>

          {/* Sign Up Form */}
          <div className="bg-gradient-to-br from-gray-900/90 via-purple-900/30 to-pink-900/30 border border-white/20 backdrop-blur-xl shadow-2xl rounded-xl ">
            <div className="p-8">
              <form className="space-y-6">
                {/* Name and Email in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <label className="block text-sm font-bold text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <label className="block text-sm font-bold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                {/* Password and Confirm Password in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Password Field */}
                  <div className="relative group">
                    <label className="block text-sm font-bold text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="relative group">
                    <label className="block text-sm font-bold text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-green-400 transition-colors" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rest of the form remains the same */}
                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-5 h-5 bg-black/50 border border-white/20 rounded focus:ring-2 focus:ring-cyan-400/20 text-cyan-400"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Sign Up Button */}
                <Button className="w-full group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white py-4 text-lg font-black rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative flex items-center justify-center">
                    <Rocket className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                    CREATE ACCOUNT
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Button>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-black/50 text-gray-400 font-medium backdrop-blur-sm">
                      OR CONTINUE WITH
                    </span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="group border-2 border-white/20 hover:border-white/40 bg-black/30 hover:bg-white/10 text-white py-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-center">
                      <Github className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                      GitHub
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="group border-2 border-white/20 hover:border-white/40 bg-black/30 hover:bg-white/10 text-white py-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex justify-center items-center " >
                      <Chrome className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                      Google
                    </div>
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Features Preview */}
          {/* <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: Zap, text: "Instant Access", color: "text-yellow-400" },
              { icon: Shield, text: "Secure", color: "text-green-400" },
              {
                icon: CheckCircle,
                text: "Free Forever",
                color: "text-blue-400",
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <feature.icon
                  className={`h-8 w-8 ${feature.color} mx-auto mb-2 group-hover:animate-pulse`}
                />
                <p className="text-sm text-gray-400 font-medium">
                  {feature.text}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
