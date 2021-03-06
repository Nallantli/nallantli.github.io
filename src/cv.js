let cvhtml = `<div id="dir">`;

let langs = ["en", "it", "jp"];

let downloads = {"en" : "", "it" : "", "jp" : ""};

let formats = {
	"about": (content, metadata) => {
		let inner = `<div class="picture-cont"><img class="picture-me" src="${metadata.img}" alt="PIC">`;
		inner += `</div><div class="data-points">`;
		for (let i = 0; i < content.length; i++) {
			inner += formats[content[i].format](content[i]);
		}
		return inner + `</div>`;
	},
	"none": (content) => {
		let inner = "";
		for (let i = 0; i < content.length; i++) {
			inner += formats[content[i].format](content[i]);
		}
		return inner;
	},
	"p": (content) => {
		return `<p>${content.text}</p>`;
	},
	"ipa": (content) => {
		return `<p>[<span class="IPA">${content.text}</span>]</p>`;
	},
	"ul": (content) => {
		let inner = ``;
		if (content.text != undefined) {
			inner += `<b>${content.text}</b>`;
		}
		inner += `<ul>`;
		for (let i = 0; i < content.sub.length; i++) {
			inner += `<li>${content.sub[i]}</li>`;
		}
		return inner + `</ul>`;
	},
	"link": (content) => {
		return `<a target="_blank" rel="noopener noreferrer" href="${content.href}">${content.text}</a>`;
	},
	"table": (content) => {
		let inner = `<table>`;
		for (let i = 0; i < content.rows.length; i++) {
			inner += `<tr>`;
			let row = content.rows[i];
			for (let j = 0; j < row.length; j++) {
				inner += `<td>${formats[row[j].format](row[j])}</td>`;
			}
			inner += `</tr>`;
		}
		return inner + `</table>`;
	}
}

for (let i = 0; i < CV.length; i++) {
	cvhtml += `+<a href="#${CV[i].id}"> ${CV[i].en.title.toUpperCase()}・${CV[i].it.title.toUpperCase()}・${CV[i].jp.title.toUpperCase()}</a><br>`;
}
cvhtml += `</div>`;

for (let i = 0; i < CV.length; i++) {
	cvhtml += `<div><a name="${CV[i].id}"></a>`;
	cvhtml += `<h1>${CV[i].en.title.toUpperCase()}・${CV[i].it.title.toUpperCase()}・${CV[i].jp.title.toUpperCase()}</h1>`;

	cvhtml += `<div class="buttons">`;
	cvhtml += `<button class="tab-button en ${CV[i].id} selected" onclick="openTab('en', '${CV[i].id}')">EN</button>`;
	cvhtml += `<button class="tab-button it ${CV[i].id}" onclick="openTab('it', '${CV[i].id}')">IT</button>`;
	cvhtml += `<button class="tab-button jp ${CV[i].id}" onclick="openTab('jp', '${CV[i].id}')">和</button>`;
	cvhtml += `</div>`;

	langs.forEach((lang) => {
		let temp = ``;

		cvhtml += `<div class="section ${lang} ${CV[i].id}${lang != "en" ? " collapsed" : ""}">`;
		temp += formats[CV[i].metadata.format](CV[i][lang].content, CV[i].metadata);
		temp += `</div>`

		downloads[lang] += `<h1>${CV[i][lang].title.toUpperCase()}</h1><div class="section ${lang} ${CV[i].id}">${temp}`;
		cvhtml += temp;
	});

	cvhtml += `</div>`;
}

let cvbanner = {
	"en" : `<div id="cvbanner"><h2>BENJAMIN PARK</h2><i>Curriculum Vitae</i><p style="font-size: 10pt !important;">Ported from <b>https://nallantli.github.io/c_vitae.html</b></p></div><hr>`,
	"it" : `<div id="cvbanner"><h2>BENJAMIN PARK</h2><i>Curriculum Vitae</i><p style="font-size: 10pt !important;">Portato da <b>https://nallantli.github.io/c_vitae.html</b></p></div><hr>`,
	"jp" : `<div id="cvbanner"><h2>ベンジャミン・パーク</h2><i>履歴書</i><p style="font-size: 10pt !important;"><b>https://nallantli.github.io/c_vitae.html</b>から編集された</p></div><hr>`
}

langs.forEach((lang) => {
	downloads[lang] = `<html><head><meta charset='utf-8'><link rel="stylesheet" href="src/Web/css/ibm-plex.min.css"><link rel="stylesheet" href="src/cvwhite.css"></head><body>${cvbanner[lang]}${downloads[lang]}</body></html>`
});

function download(lang) {
	var printWindow = window.open('', '');
	printWindow.document.write(downloads[lang]);
	printWindow.document.close();
	printWindow.focus();
}

document.getElementById("cv-body").innerHTML = cvhtml;