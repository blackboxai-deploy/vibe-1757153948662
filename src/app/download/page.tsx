'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DownloadPage = () => {
  const [downloadInfo, setDownloadInfo] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    fetchDownloadInfo();
  }, []);

  const fetchDownloadInfo = async () => {
    try {
      const response = await fetch('/api/download?type=info');
      const result = await response.json();
      if (result.success) {
        setDownloadInfo(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch download info:', error);
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const link = document.createElement('a');
      link.href = '/qd-enhanced-swarm-system-complete.tar.gz';
      link.download = 'qd-enhanced-swarm-system-complete.tar.gz';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        alert('✅ Download started! Check your Downloads folder for the complete QD-Enhanced system package.');
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error('Download failed:', error);
      alert('❌ Download failed. Please try again or use manual download method.');
      setIsDownloading(false);
    }
  };

  const handleManualDownload = () => {
    const instructions = `
📋 Manual Download Instructions:

1. COPY FILES FROM CURRENT SANDBOX:
   - Navigate to each directory in the browser
   - Copy file contents to your local environment
   - Maintain the directory structure

2. ESSENTIAL FILES TO COPY:
   📁 src/app/ (all page components and API routes)
   📁 src/components/ (UI components and authentication)
   📁 src/lib/ (core logic, agents, LLM integration)
   📄 package.json (dependencies and scripts)
   📄 README.md (complete documentation)
   📄 .env.example (environment variables)

3. LOCAL SETUP:
   npm install
   npm run dev
   Visit: http://localhost:3000
   Login: egor1993 / Nvidia980@

4. GITHUB DEPLOYMENT:
   git init
   git add .
   git commit -m "QD-Enhanced Swarm Agent System"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
`;
    
    alert(instructions);
  };

  const handleGitHubInstructions = () => {
    const gitInstructions = `
🚀 GitHub Deployment Instructions:

1. CREATE NEW REPOSITORY:
   - Go to GitHub.com
   - Click "New Repository"
   - Name: "qd-enhanced-swarm-agent-system"
   - Make it public or private

2. CLONE AND SETUP:
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd YOUR_REPO
   
3. COPY ALL FILES:
   - Copy all files from downloaded package
   - Maintain directory structure
   
4. COMMIT AND PUSH:
   git add .
   git commit -m "🚀 QD-Enhanced Multi-LLM Swarm Agent System"
   git push origin main

5. DEPLOY TO VERCEL:
   vercel --prod
   
6. ACCESS YOUR SYSTEM:
   Login: egor1993 / Nvidia980@
`;
    
    alert(gitInstructions);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            📦 Download QD-Enhanced System
          </h1>
          <p className="text-xl text-gray-300">Get the complete source code for your AI swarm system</p>
        </div>

        <Alert className="mb-8 border-green-500 bg-green-500/10">
          <AlertDescription className="text-green-200">
            ✅ Your QD-Enhanced Multi-LLM Swarm Agent System is ready for download with authentication layer!
          </AlertDescription>
        </Alert>

        {downloadInfo && (
          <Card className="mb-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600/30">
            <CardHeader>
              <CardTitle className="text-white">📊 Package Information</CardTitle>
              <CardDescription className="text-slate-300">Complete system details and features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">📁 Package Contents</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Files:</span>
                      <span className="text-white font-semibold">80+ files</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Package Size:</span>
                      <span className="text-white font-semibold">93KB compressed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Version:</span>
                      <span className="text-white font-semibold">1.0.0</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🔐 Authentication</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Username:</span>
                      <span className="text-white font-semibold font-mono">egor1993</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Password:</span>
                      <span className="text-white font-semibold font-mono">Nvidia980@</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Security:</span>
                      <span className="text-white font-semibold">Enterprise-grade</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">🧠 QD-Enhanced Features</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Badge variant="outline" className="text-xs justify-center">7 AI Agents</Badge>
                  <Badge variant="outline" className="text-xs justify-center">Memory Systems</Badge>
                  <Badge variant="outline" className="text-xs justify-center">Causal Analysis</Badge>
                  <Badge variant="outline" className="text-xs justify-center">Multi-LLM Support</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-blue-300">🚀 Automatic Download</CardTitle>
              <CardDescription className="text-blue-200">Download complete package instantly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-300">
                Downloads a compressed archive containing all source code, documentation, and configuration files.
              </div>
              
              <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-400/30">
                <div className="text-xs text-blue-300 font-medium mb-1">Package Includes:</div>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Complete source code (80+ files)</li>
                  <li>• Authentication system</li>
                  <li>• QD-enhanced agent implementations</li>
                  <li>• Multi-LLM provider integrations</li>
                  <li>• Configuration and documentation</li>
                  <li>• Deployment scripts and guides</li>
                </ul>
              </div>

              <Button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isDownloading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Preparing Download...
                  </div>
                ) : (
                  <>📦 Download Complete Package (93KB)</>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-300">📋 Manual Download</CardTitle>
              <CardDescription className="text-green-200">Step-by-step instructions for manual setup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-300">
                Get detailed instructions for manually copying files and setting up the system locally.
              </div>

              <div className="bg-green-500/20 p-3 rounded-lg border border-green-400/30">
                <div className="text-xs text-green-300 font-medium mb-1">Manual Process:</div>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Browser-based file copying</li>
                  <li>• Directory structure guide</li>
                  <li>• Local setup instructions</li>
                  <li>• GitHub deployment steps</li>
                  <li>• Troubleshooting tips</li>
                  <li>• Alternative deployment methods</li>
                </ul>
              </div>

              <Button 
                onClick={handleManualDownload}
                variant="outline"
                className="w-full border-green-500 text-green-300 hover:bg-green-500/10"
              >
                📋 Get Manual Instructions
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-orange-300">🚀 GitHub Deployment</CardTitle>
              <CardDescription className="text-orange-200">Deploy directly to GitHub and production</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-300">
                Get instructions for pushing your code to GitHub and deploying to production platforms.
              </div>

              <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-400/30">
                <div className="text-xs text-orange-300 font-medium mb-1">GitHub Process:</div>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Repository setup guide</li>
                  <li>• Git commands and workflow</li>
                  <li>• Vercel deployment steps</li>
                  <li>• Environment configuration</li>
                  <li>• Production optimization</li>
                  <li>• Monitoring and maintenance</li>
                </ul>
              </div>

              <Button 
                onClick={handleGitHubInstructions}
                variant="outline"
                className="w-full border-orange-500 text-orange-300 hover:bg-orange-500/10"
              >
                🚀 GitHub Deployment Guide
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600/30">
          <CardHeader>
            <CardTitle className="text-white">⚡ Quick Setup Guide</CardTitle>
            <CardDescription className="text-slate-300">Get up and running in 5 minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">1. Download & Extract</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Download the package above</li>
                  <li>• Extract to your dev folder</li>
                  <li>• Open in your IDE</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">2. Install & Run</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Run: <code className="bg-slate-700 px-1 rounded">pnpm install</code></li>
                  <li>• Run: <code className="bg-slate-700 px-1 rounded">pnpm run dev</code></li>
                  <li>• Visit: <code className="bg-slate-700 px-1 rounded">localhost:3000</code></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">3. Login & Explore</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Username: <code className="bg-slate-700 px-1 rounded">egor1993</code></li>
                  <li>• Password: <code className="bg-slate-700 px-1 rounded">Nvidia980@</code></li>
                  <li>• Explore QD features!</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30">
          <CardHeader>
            <CardTitle className="text-indigo-300">🌟 What You're Downloading</CardTitle>
            <CardDescription className="text-indigo-200">Complete QD-enhanced AI development platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-300">🔐 Security</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Authentication system</li>
                  <li>• HashiCorp Vault integration</li>
                  <li>• Zero-trust architecture</li>
                  <li>• Audit logging</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">🧠 QD Intelligence</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Memory systems</li>
                  <li>• Causal analysis</li>
                  <li>• Adaptive planning</li>
                  <li>• Knowledge transfer</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-300">🤖 7 AI Agents</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Coordinator</li>
                  <li>• Code Generator</li>
                  <li>• Code Reviewer</li>
                  <li>• Testing Agent</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-300">🔌 Integrations</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• OpenAI GPT-4o</li>
                  <li>• Claude Sonnet 4</li>
                  <li>• Google Gemini</li>
                  <li>• + BlackBox, OpenRouter</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
          <CardHeader>
            <CardTitle className="text-yellow-300">🛠️ Development Commands</CardTitle>
            <CardDescription className="text-yellow-200">Essential commands for local development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">📦 Installation</h4>
                <div className="bg-slate-700/50 p-3 rounded-lg font-mono text-xs">
                  <div className="text-green-400"># Install dependencies</div>
                  <div className="text-white">npm install</div>
                  <div className="text-gray-400"># or</div>
                  <div className="text-white">pnpm install</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">🚀 Development</h4>
                <div className="bg-slate-700/50 p-3 rounded-lg font-mono text-xs">
                  <div className="text-green-400"># Start dev server</div>
                  <div className="text-white">npm run dev</div>
                  <div className="text-gray-400"># Access at</div>
                  <div className="text-white">http://localhost:3000</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className="mt-8 border-purple-500 bg-purple-500/10">
          <AlertDescription className="text-purple-200">
            🎯 <strong>Ready to revolutionize your development workflow!</strong> This QD-Enhanced system includes advanced AI agents, 
            memory systems, causal analysis, and enterprise security - all with your specified authentication credentials.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default DownloadPage;