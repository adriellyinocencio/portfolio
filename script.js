  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

  document.querySelectorAll('.phone-wrap').forEach(wrap=>{
    const frame = wrap.querySelector('.phone-frame');
    const track = frame.querySelector('.carousel-track');
    const slides = track.children;
    const dots = wrap.querySelectorAll('.dot-nav');
    let idx = 0;
    function update(){
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d,i)=> d.classList.toggle('active', i===idx));
    }
    frame.querySelector('.prev').addEventListener('click', ()=>{
      idx = (idx - 1 + slides.length) % slides.length;
      update();
    });
    frame.querySelector('.next').addEventListener('click', ()=>{
      idx = (idx + 1) % slides.length;
      update();
    });
    dots.forEach((d,i)=> d.addEventListener('click', ()=>{ idx = i; update(); }));
  });