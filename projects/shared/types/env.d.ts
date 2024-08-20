interface Env {
  /** ---------- 仅开发模式 ---------- */
  /** 客户端启动端口（默认值：3000） */
  VITE_CLIENT_PORT?: string | number
  /** 客户端基础路径（默认值：`/`） */
  VITE_CLIENT_BASE?: string
  /** 管理后台启动端口（默认值：3001） */
  VITE_ADMIN_PORT?: string | number
  /** 管理后台基础路径（默认值：`/`） */
  VITE_ADMIN_BASE?: string

  /** 代理目标 */
  VITE_PROXY_TARGET?: string
  /** API基础路径（默认值：`/api`） */
  VITE_API_BASE?: string

  /** ---------- 从后端服务直接读取的配置 ---------- */
  /** ---------- 应用相关配置 ---------- */
  /** 应用名称 */
  VITE_APP_NAME: string

  /** ---------- 同步数据库配置 ---------- */
  /** 同步数据库的环境 */
  VITE_SYNC_DB_ENV: string

  /** ---------- 阿里云验证码服务配置 ---------- */
  /** 验证码服务的场景ID */
  VITE_CAPTCHA_SERVICE_SCENE_ID: string
  /** 验证码服务的身份标 */
  VITE_CAPTCHA_SERVICE_PREFIX: string

  /** ---------- RSA密钥对 ---------- */
  /** 加密公钥 */
  VITE_RSA_PUBLIC_KEY: string

  /** ---------- 需要定义在环境变量的配置 ---------- */
  /** ---------- 通用 ---------- */
  /** AES 加密秘钥 */
  VITE_AES_SECRET_KEY: string
}

interface ImportMeta {
  env: Env & ImportMetaEnv
}
