

function AppendPublications(parent, data){
  let ul = document.createElement("ul")
  ul.className = "list-group w-100"
  ul.style = "cursor: default"

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li")
    li.id = data[i].ID
    li.className = "list-group-item"

    let title = document.createElement("a")
    title.href = "#" + data[i].ID
    title.className = ".d-flex list-group-item-action"

    let h5 = document.createElement("h5")
    h5.className = "mb-0"
    h5.textContent = data[i].title

    let subtitle = document.createElement("p")
    subtitle.className = "mb-0"
    subtitle.style = "font-size: 90%"

    let text = data[i].author
    if (('shortname' in data[i]) && data[i]['shortname'] ){
      text += ', in ' + data[i]['shortname'];
    } else if (('booktitle' in data[i]) && data[i]['booktitle']){
      text += ', in ' + data[i]['booktitle'];
    } else if (('journal' in data[i]) && data[i]['journal']){
      text += ', in ' + data[i]['journal'];
    }
    text += ', ' + data[i]['year'] + ', '

    subtitle.innerHTML = text

    if (('bib_url' in data[i]) && data[i]['bib_url'] ){
      let a = document.createElement('a')
      a.textContent = '[bib]';
      a.href = data[i]['bib_url'];
      a.setAttribute('data-data', 'iframe');
      a.setAttribute('data-fancybox', true);
      a.setAttribute('data-options', '{"type" : "iframe", "iframe" : {"preload" : false, "css" : {"width" : "700px", "height" : "300px"}}}');
      subtitle.appendChild(a)
    }

    if (('arxiv' in data[i]) && data[i]['arxiv'] ){
      let a = document.createElement('a')
      a.textContent = '[arxiv]';
      a.href = data[i]['arxiv'];
      subtitle.appendChild(a)
    }

    if (('pdf' in data[i]) && data[i]['pdf'] ){
      let a = document.createElement('a')
      a.textContent = '[pdf]';
      a.href = data[i]['pdf'];
      subtitle.appendChild(a)
    }

    if (('software' in data[i]) && data[i]['software'] ){
      let a = document.createElement('a')
      a.textContent = '[code]';
      a.href = data[i]['software'];
      subtitle.appendChild(a)
    }

    if (('video' in data[i]) && data[i]['video'] ){
      let a = document.createElement('a')
      a.textContent = '[video]';
      a.href = data[i]['video'];
      subtitle.appendChild(a)
    }

    if (('link' in data[i]) && data[i]['link'] ){
      let a = document.createElement('a')
      a.textContent = '[url]';
      a.href = data[i]['link'];
      subtitle.appendChild(a)
    }

    title.appendChild(h5)
    li.appendChild(title)
    li.appendChild(subtitle)
    ul.appendChild(li)
  }
  parent.appendChild(ul)
}

function AppendPresentations(parent, data){
  let div = document.createElement("div");
  div.className = 'row'
  let div_inner = document.createElement("div");
  div_inner.className = 'list-group w-100'
  div_inner.style = 'cursor: default'

  for (let i = 0; i < data.length; i++) {
    let span = document.createElement('span');
    span.className = 'list-group-item'
    let h5 = document.createElement('h5');
    h5.className = 'mb-0'
    h5.innerText = data[i].title
    span.appendChild(h5)

    let place_time = document.createElement('span');
    place_time.innerText = data[i].place + ', ' + data[i].time + ' '
    span.appendChild(place_time)

    if (('link' in data[i]) && data[i]['link'] ){
      let a = document.createElement('a')
      a.textContent = '[url]';
      a.href = data[i]['link'];
      span.appendChild(a)
    }

    if (('video_url' in data[i]) && data[i]['video_url'] ){
      let a = document.createElement('a')
      a.textContent = '[video]';
      a.href = data[i]['video_url'];
      span.appendChild(a)
    }
    if (('slide_url' in data[i]) && data[i]['slide_url'] ){
      let a = document.createElement('a')
      a.textContent = '[slide]';
      a.href = data[i]['slide_url'];
      span.appendChild(a)
    }
    if (('poster_url' in data[i]) && data[i]['poster_url'] ){
      let a = document.createElement('a')
      a.textContent = '[poster]';
      a.href = data[i]['poster_url'];
      span.appendChild(a)
    }
    div_inner.appendChild(span)
  }

  div.appendChild(div_inner)
  parent.appendChild(div)
}

function AppendProjects(parent, data){
  let div = document.createElement("div");
  div.className = 'row'

  for (let i = 0; i < data.length; i++) {
    let inner_div = document.createElement('div');
    inner_div.className = 'card col-lg-4';
    inner_div.style = 'width: 18rem;';

    let a = document.createElement('a');
    a.href = data[i]['url']
    inner_div.appendChild(a)

    let card_body = document.createElement('div')
    card_body.className = 'card-body'
    let h4 = document.createElement('h4')
    h4.className = 'card-title'
    h4.innerText = data[i].title
    card_body.appendChild(h4)
    let p = document.createElement('p')
    p.className = 'card-text'
    p.innerText = data[i].short_description
    card_body.appendChild(p)

    a.appendChild(card_body)
    div.appendChild(inner_div)
  }

  parent.appendChild(div)
}

function AppendAwards(parent, data){
  let div = document.createElement("div");
  div.className = 'row'

  let inner_div = document.createElement('div');
  inner_div.className = 'list-group';
  inner_div.style = 'cursor: default';

  for (let i = 0; i < data.length; i++) {
    let a = document.createElement('a');
    a.className = 'list-group-item'
    inner_div.style = 'padding: 6px 15px; font-size: 14px';
    let b = document.createElement('b');
    b.textContent = data[i]
    a.appendChild(b)
    inner_div.appendChild(a)

    div.appendChild(inner_div)
  }

  parent.appendChild(div)
}

function LoadDataAndCreateContent() {
  fetch("./data.json").then((res) => {
      return res.json();
  }).then((data) => {
    AppendPublications(document.getElementById('pub-preprints'), data.preprints);
    AppendPublications(document.getElementById('pub-postprints'), data.postprints);
    AppendPresentations(document.getElementById('presentations'), data.talks);
    AppendProjects(document.getElementById('projects'), data.projects);
    AppendAwards(document.getElementById('awards'), data.awards);
  });
}
