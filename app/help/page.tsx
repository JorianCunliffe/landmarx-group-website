import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-User Editing Guide — Landmarx Group Website',
  description: 'How to set up GitHub and AI tools so multiple people can edit this website.',
  robots: 'noindex, nofollow',
}

const sections = [
  {
    id: 'overview',
    title: 'How this website works',
    content: `This website is built with Next.js and hosted on Vercel. The source code lives on GitHub. When you push a change to GitHub, Vercel automatically rebuilds and redeploys the site — usually within 60–90 seconds.

The key principle: GitHub is the single source of truth. Everyone edits files in the GitHub repository, and Vercel deploys whatever is on the main branch.`
  },
]

export default function HelpPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0D1B2E] text-white pt-32 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded mb-4 uppercase tracking-widest">
            Internal Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Multi-User Website Editing</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            How multiple people can edit this website using GitHub and AI tools — without sharing login credentials.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Table of contents */}
        <div className="bg-[#F7F8FA] border border-slate-200 rounded-lg p-6 mb-12">
          <h2 className="font-bold text-[#0D1B2E] mb-4 text-sm uppercase tracking-wide">On this page</h2>
          <nav className="space-y-2 text-sm">
            {[
              ['#how-it-works', 'How it all works together'],
              ['#step1', 'Step 1 — Push the code to GitHub'],
              ['#step2', 'Step 2 — Connect Vercel to GitHub'],
              ['#step3', 'Step 3 — Invite collaborators on GitHub'],
              ['#step4', 'Step 4 — Each collaborator edits using Claude Code'],
              ['#step5', 'Step 5 — Deploying changes'],
              ['#workflows', 'Practical editing workflows'],
              ['#tips', 'Tips and common questions'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="flex items-center gap-2 text-slate-600 hover:text-[#C9A84C] transition-colors">
                <span className="text-[#C9A84C]">→</span> {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Section: How it works */}
        <section id="how-it-works" className="mb-14 scroll-mt-20">
          <div className="w-10 h-0.5 bg-[#C9A84C] mb-5" />
          <h2 className="text-2xl font-bold text-[#0D1B2E] mb-4">How it all works together</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This website uses three tools in a chain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { name: 'GitHub', role: 'Stores the code. Acts as the central hub that everyone pushes changes to.' },
              { name: 'Vercel', role: 'Watches GitHub. Automatically rebuilds and deploys the website when code changes.' },
              { name: 'Claude Code', role: 'AI editing tool. Each collaborator uses it locally to make changes, then pushes to GitHub.' },
            ].map(t => (
              <div key={t.name} className="bg-[#F7F8FA] border border-slate-200 rounded-lg p-5">
                <div className="font-bold text-[#0D1B2E] mb-2">{t.name}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{t.role}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700 leading-relaxed">
            <strong>The flow:</strong> You edit files locally with Claude Code → push to GitHub → Vercel detects the change → website updates automatically. No FTP, no manual uploads, no server access required.
          </div>
        </section>

        {/* Step 1 */}
        <section id="step1" className="mb-14 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-8 rounded-full bg-[#C9A84C] text-white text-sm font-bold flex items-center justify-center shrink-0">1</span>
            <h2 className="text-2xl font-bold text-[#0D1B2E]">Push the code to GitHub</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-5">
            The website code needs to be on GitHub first. If it is not yet there, follow these steps <strong>once</strong> (the website owner does this):
          </p>
          <ol className="space-y-4 mb-5">
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">1.</span>
              <div>
                <p className="text-slate-700 text-sm mb-1">Go to <strong>github.com</strong> and sign in (or create a free account).</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">2.</span>
              <div>
                <p className="text-slate-700 text-sm mb-1">Click the <strong>+</strong> icon → <strong>New repository</strong>. Name it <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">landmarx-group-website</code>. Set it to <strong>Private</strong>. Click <strong>Create repository</strong>.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">3.</span>
              <div>
                <p className="text-slate-700 text-sm mb-2">Open Claude Code in the website folder and run these commands:</p>
                <pre className="bg-[#0D1B2E] text-slate-200 rounded-lg p-4 text-xs overflow-x-auto leading-relaxed">
{`git init
git add .
git commit -m "Initial website commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/landmarx-group-website.git
git push -u origin main`}
                </pre>
                <p className="text-xs text-slate-500 mt-2">Replace <code>YOUR-USERNAME</code> with your actual GitHub username.</p>
              </div>
            </li>
          </ol>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <strong>Already on GitHub?</strong> Skip this step — just make sure everyone has access to the repository.
          </div>
        </section>

        {/* Step 2 */}
        <section id="step2" className="mb-14 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-8 rounded-full bg-[#C9A84C] text-white text-sm font-bold flex items-center justify-center shrink-0">2</span>
            <h2 className="text-2xl font-bold text-[#0D1B2E]">Connect Vercel to GitHub</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-5">
            This links your GitHub repository to Vercel so every push triggers an automatic deployment.
          </p>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">1.</span>
              <p className="text-slate-700 text-sm">Go to <strong>vercel.com</strong> → sign in with your GitHub account.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">2.</span>
              <p className="text-slate-700 text-sm">Click <strong>Add New → Project</strong>. Select the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">landmarx-group-website</code> repository from the list.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">3.</span>
              <p className="text-slate-700 text-sm">Vercel will auto-detect it is a Next.js project. Leave the build settings as-is. Click <strong>Deploy</strong>.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">4.</span>
              <p className="text-slate-700 text-sm">In about 60 seconds your site will be live at a <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">*.vercel.app</code> URL. You can add a custom domain later in Vercel settings.</p>
            </li>
          </ol>
        </section>

        {/* Step 3 */}
        <section id="step3" className="mb-14 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-8 rounded-full bg-[#C9A84C] text-white text-sm font-bold flex items-center justify-center shrink-0">3</span>
            <h2 className="text-2xl font-bold text-[#0D1B2E]">Invite collaborators on GitHub</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-5">
            This is how you give other people access to edit the website — <strong>without sharing your accounts</strong>. Each person gets their own free GitHub account and their own Claude Code subscription.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 mb-5">
            <strong>Important:</strong> Never share your Claude Code account or GitHub password. Instead, invite collaborators properly so each person has full edit history and accountability.
          </div>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">1.</span>
              <div className="text-sm text-slate-700">
                <p className="mb-1">Each collaborator creates their own free GitHub account at <strong>github.com</strong>.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">2.</span>
              <div className="text-sm text-slate-700">
                <p className="mb-1">The repository owner goes to:</p>
                <p className="font-mono bg-slate-100 px-3 py-1.5 rounded text-xs mb-1">GitHub repo → Settings → Collaborators → Add people</p>
                <p>Enter each collaborator&apos;s GitHub username. Set permission to <strong>Write</strong>.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">3.</span>
              <p className="text-sm text-slate-700">Each collaborator accepts the email invitation from GitHub.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">4.</span>
              <p className="text-sm text-slate-700">Each collaborator <strong>clones</strong> the repository to their own computer (covered in the next step).</p>
            </li>
          </ol>
        </section>

        {/* Step 4 */}
        <section id="step4" className="mb-14 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-8 rounded-full bg-[#C9A84C] text-white text-sm font-bold flex items-center justify-center shrink-0">4</span>
            <h2 className="text-2xl font-bold text-[#0D1B2E]">Each collaborator edits using Claude Code</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-5">
            Each collaborator needs: a GitHub account (free), Git installed on their computer, and a Claude Code subscription (paid — each person gets their own at <strong>claude.ai/code</strong>).
          </p>

          <h3 className="font-bold text-[#0D1B2E] mb-3">First-time setup (each collaborator does this once)</h3>
          <ol className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">1.</span>
              <div className="text-sm text-slate-700">
                <p className="mb-2">Install Git if not already installed. Download from <strong>git-scm.com</strong>.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">2.</span>
              <div className="text-sm text-slate-700">
                <p className="mb-2">Clone the repository. In a terminal (or Claude Code terminal), run:</p>
                <pre className="bg-[#0D1B2E] text-slate-200 rounded-lg p-4 text-xs overflow-x-auto">
{`git clone https://github.com/OWNER-USERNAME/landmarx-group-website.git
cd landmarx-group-website`}
                </pre>
                <p className="text-xs text-slate-500 mt-2">Replace <code>OWNER-USERNAME</code> with the repository owner&apos;s GitHub username.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">3.</span>
              <div className="text-sm text-slate-700">
                <p className="mb-2">Install dependencies:</p>
                <pre className="bg-[#0D1B2E] text-slate-200 rounded-lg p-4 text-xs overflow-x-auto">
{`npm install`}
                </pre>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">4.</span>
              <div className="text-sm text-slate-700">
                <p className="mb-2">Open Claude Code in the project folder:</p>
                <pre className="bg-[#0D1B2E] text-slate-200 rounded-lg p-4 text-xs overflow-x-auto">
{`claude`}
                </pre>
                <p className="text-xs text-slate-500 mt-2">Or open the Claude Code desktop app and navigate to the folder.</p>
              </div>
            </li>
          </ol>

          <h3 className="font-bold text-[#0D1B2E] mb-3">Making edits with Claude Code</h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Once inside Claude Code, just describe what you want to change in plain English. Examples:
          </p>
          <div className="space-y-3 mb-5">
            {[
              'Update the hero headline on the homepage to "New headline text here"',
              'Change the phone number in the footer to +61 400 000 000',
              'Add a new team member called Sarah Smith — Director of Finance — to the About page',
              'Update the Lake St Medical project description to say the EOI closes 31 March 2026',
              'Change the email address in the Contact page to newmail@landmarx.co',
            ].map(ex => (
              <div key={ex} className="bg-[#F7F8FA] border border-slate-200 rounded px-4 py-3 text-sm text-slate-700 font-mono">
                &ldquo;{ex}&rdquo;
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Claude Code will find the right file, make the change, and show you a preview. You review the change before it is saved.
          </p>
        </section>

        {/* Step 5 */}
        <section id="step5" className="mb-14 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-8 rounded-full bg-[#C9A84C] text-white text-sm font-bold flex items-center justify-center shrink-0">5</span>
            <h2 className="text-2xl font-bold text-[#0D1B2E]">Deploying changes</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-5">
            After Claude Code makes a change and you are happy with it, you need to push it to GitHub. You can ask Claude Code to do this for you, or do it manually.
          </p>

          <h3 className="font-bold text-[#0D1B2E] mb-3">Option A — Ask Claude Code to commit and push</h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            In Claude Code, type:
          </p>
          <div className="bg-[#F7F8FA] border border-slate-200 rounded px-4 py-3 text-sm font-mono text-slate-700 mb-5">
            &ldquo;Commit these changes and push to GitHub with the message: Update homepage headline&rdquo;
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">Claude Code will run the git commit and git push commands for you.</p>

          <h3 className="font-bold text-[#0D1B2E] mb-3">Option B — Push manually via terminal</h3>
          <pre className="bg-[#0D1B2E] text-slate-200 rounded-lg p-4 text-xs overflow-x-auto mb-5 leading-relaxed">
{`git add .
git commit -m "Your description of the change"
git push`}
          </pre>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-sm text-emerald-800">
            <strong>After pushing:</strong> Vercel detects the GitHub change automatically and rebuilds the site. Wait about 60–90 seconds, then refresh the live website to see the update.
          </div>
        </section>

        {/* Workflows */}
        <section id="workflows" className="mb-14 scroll-mt-20">
          <div className="w-10 h-0.5 bg-[#C9A84C] mb-5" />
          <h2 className="text-2xl font-bold text-[#0D1B2E] mb-6">Practical editing workflows</h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-[#0D1B2E] mb-3">Scenario: Two people edit at the same time</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                If two people are editing simultaneously, one of you will need to <strong>pull</strong> the latest changes before pushing. The second person to push should run:
              </p>
              <pre className="bg-[#0D1B2E] text-slate-200 rounded-lg p-3 text-xs mb-3">
{`git pull
git push`}
              </pre>
              <p className="text-xs text-slate-500">If there is a conflict, Git will mark it in the file. You or Claude Code can resolve it.</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-[#0D1B2E] mb-3">Scenario: Testing changes before going live</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                To preview changes locally before pushing, run the development server:
              </p>
              <pre className="bg-[#0D1B2E] text-slate-200 rounded-lg p-3 text-xs mb-3">
{`npm run dev`}
              </pre>
              <p className="text-sm text-slate-700">Then open <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">http://localhost:3000</code> in your browser to see the site locally. Changes here are <strong>not</strong> live — only pushed changes go live.</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-[#0D1B2E] mb-3">Scenario: Editing with branches (safer workflow for bigger changes)</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                For larger changes, create a branch so the live site is not affected until you are ready:
              </p>
              <pre className="bg-[#0D1B2E] text-slate-200 rounded-lg p-3 text-xs mb-3 leading-relaxed">
{`# Create a new branch
git checkout -b my-changes

# Make your edits, then commit
git add .
git commit -m "Description of changes"
git push -u origin my-changes`}
              </pre>
              <p className="text-sm text-slate-700 mb-2">
                Vercel creates a <strong>preview URL</strong> for every branch — so you can share a link for review before merging to main.
              </p>
              <p className="text-sm text-slate-700">
                When ready to go live, merge to main: on GitHub, open a Pull Request from your branch to main, then click Merge.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section id="tips" className="mb-14 scroll-mt-20">
          <div className="w-10 h-0.5 bg-[#C9A84C] mb-5" />
          <h2 className="text-2xl font-bold text-[#0D1B2E] mb-6">Tips and common questions</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Do collaborators need to pay for Claude Code?',
                a: 'Yes — each person needs their own Claude Code subscription. As of 2026, Claude Code is available at claude.ai/code with monthly plans. Each person keeps their own account; there is no team pricing that shares one account.',
              },
              {
                q: 'What if I break the website?',
                a: 'Git keeps a full history of every change. You can always roll back. In Claude Code, say: "Revert to the previous commit" — or in terminal run: git revert HEAD. Vercel will redeploy the reverted version automatically.',
              },
              {
                q: 'Can I edit without using Claude Code — just GitHub directly?',
                a: 'Yes. On GitHub, navigate to any file, click the pencil icon to edit it directly in the browser, then click Commit changes. Vercel will deploy the update. This is fine for small text edits but not for larger structural changes.',
              },
              {
                q: 'How do I add images to the website?',
                a: 'Put image files in the /public folder in the repository. In Claude Code, say: "Add image hero.jpg to the public folder and use it as the hero image on the homepage." Claude Code will write the correct Next.js Image component code.',
              },
              {
                q: 'Where is each page\'s content located?',
                a: 'Each page is a file in the app/ folder: app/page.tsx (homepage), app/about/page.tsx, app/development-services/page.tsx, app/investment/page.tsx, app/projects/page.tsx, app/products/page.tsx, app/contact/page.tsx, app/register-interest/page.tsx. The navigation is in components/Navigation.tsx and the footer in components/Footer.tsx.',
              },
              {
                q: 'How do I give someone read-only access (to review only, not edit)?',
                a: 'On GitHub, go to Settings → Collaborators → Add people, and set their permission to Read instead of Write. They can view all code but cannot push changes.',
              },
              {
                q: 'How do I connect a custom domain (e.g. landmarx.co)?',
                a: 'In Vercel, go to your project → Settings → Domains → Add Domain. Enter your domain and follow the DNS instructions. You will need to add a CNAME or A record with your domain registrar. This takes 10–60 minutes to propagate.',
              },
            ].map(item => (
              <div key={item.q} className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-[#0D1B2E] mb-2 text-sm">{item.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <div className="bg-[#0D1B2E] text-white rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4">Quick reference summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Add a collaborator', action: 'GitHub repo → Settings → Collaborators → Add people' },
              { label: 'Get latest changes', action: 'git pull (in terminal or ask Claude Code)' },
              { label: 'Push a change live', action: 'git add . && git commit -m "message" && git push' },
              { label: 'Preview locally', action: 'npm run dev → open localhost:3000' },
              { label: 'Undo last change', action: 'git revert HEAD (then push)' },
              { label: 'See deploy status', action: 'vercel.com → your project → Deployments' },
            ].map(r => (
              <div key={r.label} className="bg-white/10 rounded-lg p-4">
                <div className="font-semibold text-[#C9A84C] text-xs uppercase tracking-wide mb-1">{r.label}</div>
                <div className="text-slate-300 font-mono text-xs leading-relaxed">{r.action}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
