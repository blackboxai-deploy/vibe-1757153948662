import { NextRequest, NextResponse } from 'next/server';

// Hardcoded authentication credentials for QD-Enhanced System
const VALID_CREDENTIALS = {
  username: 'egor1993',
  password: 'Nvidia980@'
};

// Generate simple JWT-like token (for demo purposes)
function generateToken(username: string): string {
  const payload = {
    username,
    timestamp: Date.now(),
    sessionId: `session_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
  };
  
  // Simple base64 encoding for demo (use proper JWT in production)
  return btoa(JSON.stringify(payload));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check credentials
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      // Generate auth token
      const token = generateToken(username);
      
      // Create user object
      const user = {
        id: 'user_egor1993',
        username: username,
        role: 'admin',
        permissions: [
          'view_agents',
          'manage_agents', 
          'view_projects',
          'manage_projects',
          'view_analytics',
          'manage_api_keys',
          'system_configuration',
          'vault_access',
          'qd_advanced_features'
        ],
        lastLogin: new Date(),
        sessionId: `session_${Date.now()}`
      };

      // Log successful login (for audit)
      console.log(`✅ Successful login: ${username} at ${new Date().toISOString()}`);

      return NextResponse.json({
        success: true,
        message: 'Authentication successful',
        data: {
          token,
          user,
          systemAccess: {
            level: 'full',
            features: [
              'QD-Enhanced Agent Dashboard',
              'Advanced Memory Systems',
              'Causal Analysis Tools',
              'Knowledge Transfer Protocols',
              'System Reflection Capabilities',
              'Multi-LLM Intelligence Network',
              'Vault Security Management'
            ],
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
          }
        }
      });
    } else {
      // Log failed login attempt (for security)
      console.log(`❌ Failed login attempt: ${username} at ${new Date().toISOString()}`);
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid username or password',
          securityNote: 'Failed login attempts are logged for security monitoring'
        },
        { status: 401 }
      );
    }
  } catch (error: any) {
    console.error('Login API error:', error);
    
    return NextResponse.json(
      { success: false, error: 'Authentication service unavailable' },
      { status: 500 }
    );
  }
}