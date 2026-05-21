# ───────────────────────────────────────────────────────────────
# FFG-Scouting — build + commit + push del sitio
# Uso (desde la raíz del proyecto):
#     .\git_push.ps1
#
# Para el SETUP INICIAL del repo (git init + remoto), usar setup_git.ps1.
# Este script es para los deploys siguientes:
#   1. npm run deploy           (build estático -> ./docs)
#   2. git add -A + commit + push origin master
#   3. GH Pages re-publica ffg-scouting.com automaticamente
# ───────────────────────────────────────────────────────────────

$ErrorActionPreference = "Stop"

# ─── Limpiar lock stale (lo deja el sandbox de Claude, Windows si puede borrarlo) ───
if (Test-Path .git\index.lock) {
    Write-Host "==> Quitando .git\index.lock stale..." -ForegroundColor Cyan
    Remove-Item .git\index.lock -Force
}

# ─── Verificar que estamos en un repo git ───
if (-not (Test-Path .git)) {
    Write-Host "No hay repo git todavia. Corre primero .\setup_git.ps1" -ForegroundColor Red
    exit 1
}

# ─── Mensaje del commit (parametro opcional) ───
$commitMsg = if ($args.Count -ge 1) { $args -join ' ' } else { "deploy: site update" }

Write-Host "==> Build del sitio (npm run deploy)..." -ForegroundColor Cyan
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "El build fallo. Reviser el output arriba." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "==> git add -A" -ForegroundColor Cyan
git add -A

Write-Host ""
Write-Host "==> Cambios a commitear:" -ForegroundColor Yellow
git status --short

# ─── Si no hay nada staged, salir ───
$staged = git diff --cached --name-only
if (-not $staged) {
    Write-Host ""
    Write-Host "No hay cambios para commitear. Nada que hacer." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "==> Commit: $commitMsg" -ForegroundColor Cyan
git commit -m $commitMsg

Write-Host ""
Write-Host "==> Push a origin/master..." -ForegroundColor Cyan
git push origin master

Write-Host ""
Write-Host "==> Listo. ffg-scouting.com se re-publica en ~30s." -ForegroundColor Green
