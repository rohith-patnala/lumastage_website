
document.addEventListener('DOMContentLoaded',()=>{
 // Keep image areas visible if an external image host is unavailable.
 document.querySelectorAll('img').forEach(img=>{
   img.addEventListener('error',()=>{
     if(!img.dataset.fallbackApplied){img.dataset.fallbackApplied='true';img.src='assets/image-fallback.svg';img.alt=img.alt||'CineLux immersive home theatre';}
   },{once:true});
 });
 const body=document.body, nav=document.querySelector('.main-nav'), toggle=document.querySelector('.menu-toggle');
 // Mark the current navigation destination and its Home dropdown parent.
 const currentFile=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 document.querySelectorAll('.main-nav a[href]').forEach(link=>{
   const target=(link.getAttribute('href')||'').split('/').pop().toLowerCase();
   if(target && target===currentFile){link.classList.add('active');link.setAttribute('aria-current','page');}
 });
 const savedMode=localStorage.getItem('lumastage-mode'); if(savedMode==='dark')body.classList.add('dark-mode');
 const modeBtn=document.querySelector('[data-mode-toggle]');
 if(modeBtn){const paint=()=>{modeBtn.innerHTML=body.classList.contains('dark-mode')?'<i data-lucide="sun"></i>':'<i data-lucide="moon"></i>'; if(window.lucide)lucide.createIcons();};paint();modeBtn.addEventListener('click',()=>{body.classList.toggle('dark-mode');localStorage.setItem('lumastage-mode',body.classList.contains('dark-mode')?'dark':'light');paint();});}
 const rtlBtn=document.querySelector('[data-rtl-toggle]');
 if(rtlBtn){
   const applyDirectionLabel=()=>{const label=rtlBtn.querySelector('.rtl-label');if(label)label.textContent=document.documentElement.dir==='rtl'?'LTR':'RTL';};
   const savedDirection=localStorage.getItem('cinelux-dir');
   document.documentElement.dir=savedDirection==='rtl'?'rtl':'ltr';
   applyDirectionLabel();
   rtlBtn.addEventListener('click',()=>{
     document.documentElement.dir=document.documentElement.dir==='rtl'?'ltr':'rtl';
     localStorage.setItem('cinelux-dir',document.documentElement.dir);
     applyDirectionLabel();
   });
 }
 if(toggle&&nav){
   toggle.addEventListener('click',event=>{
     event.preventDefault();
     event.stopPropagation();
     const isOpen=nav.classList.toggle('open');
     toggle.setAttribute('aria-expanded',String(isOpen));
     toggle.setAttribute('aria-label',isOpen?'Close menu':'Open menu');
     toggle.innerHTML=isOpen?'<i data-lucide="x"></i>':'<i data-lucide="menu"></i>';
     if(window.lucide)lucide.createIcons();
   });
   document.addEventListener('click',event=>{
     if(!nav.contains(event.target)&&!toggle.contains(event.target)&&nav.classList.contains('open')){
       nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');
       toggle.innerHTML='<i data-lucide="menu"></i>';if(window.lucide)lucide.createIcons();
     }
   });
 }
 document.querySelectorAll('.nav-dropdown > .nav-trigger').forEach(link=>link.addEventListener('click',event=>{
   if(window.matchMedia('(max-width: 900px)').matches){
     event.preventDefault();
     const parent=link.closest('.nav-dropdown');
     if(parent)parent.classList.toggle('expanded');
   }
 }));
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const note=form.querySelector('.form-status');if(note)note.textContent='Thank you — your enquiry is ready. Connect this form to your booking service to receive submissions.';form.reset();}));
 if(window.lucide)lucide.createIcons();
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll('.scroll-reveal').forEach(el=>io.observe(el));
});
