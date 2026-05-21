# ───────────────────────────────────────────────────────────────
# FFG-Scouting — setup inicial de git + remoto + primer commit
# Uso (desde la raíz del proyecto):
#     .\setup_git.ps1
# ───────────────────────────────────────────────────────────────

$ErrorActionPreference = "Stop"

Write-Host "==> Limpiando .git parcial si existiera..." -ForegroundColor Cyan
if (Test-Path .git) {
    Remove-Item .git -Recurse -Force
}

Write-Host "==> git init (rama master)..." -ForegroundColor Cyan
git init -b master

Write-Host "==> Configurando identidad local del repo..." -ForegroundColor Cyan
git config user.email "jeanpaulfrago10@gmail.com"
git config user.name  "Frago"

Write-Host "==> Build inicial del sitio (npm run deploy)..." -ForegroundColor Cyan
npm run deploy

Write-Host "==> git add ." -ForegroundColor Cyan
git add .

Write-Host ""
Write-Host "==> Lo que se va a commitear (resumen):" -ForegroundColor Yellow
git status --short

Write-Host ""
Write-Host "==> Primer commit..." -ForegroundColor Cyan

$commitMsg = @"
Snapshot inicial - FFG-Scouting site

- Next.js 14 (App Router, static export) + Tailwind + Framer Motion
- Premium dark mode bilingual (EN/ES) single-page landing
- 11 secciones: Hero / Ticker / WhoWeAre / Philosophy / WhoWeServe /
  Process / Services / Staff (con modal de fundador) / Manifesto /
  Contact / Footer
- Build estático en ./docs, sirve via GH Pages master / /docs
- Custom domain ffg-scouting.com (CNAME en public/)
- Form de contacto vía mailto: (sin servicios externos)
"@

git commit -m $commitMsg

Write-Host ""
Write-Host "==> Conectando remoto a github.com/Frago10/ffg-scouting..." -ForegroundColor Cyan
$existing = git remote 2>$null
if ($existing -contains "origin") {
    git remote set-url origin https://github.com/Frago10/ffg-scouting.git
} else {
    git remote add origin https://github.com/Frago10/ffg-scouting.git
}

Write-Host ""
Write-Host "==> Listo. Para empujar al remoto corre:" -ForegroundColor Green
Write-Host "    git push -u origin master" -ForegroundColor White
Write-Host ""
Write-Host "Despues de empujar, en GitHub:" -ForegroundColor Gray
Write-Host "  Settings -> Pages -> Branch: master / /docs -> Save" -ForegroundColor Gray
Write-Host ""
Write-Host "Si es la primera vez, Windows va a abrir una ventana para autenticarte" -ForegroundColor Gray
Write-Host "(Personal Access Token o login con tu cuenta de GitHub via browser)." -ForegroundColor Gray
