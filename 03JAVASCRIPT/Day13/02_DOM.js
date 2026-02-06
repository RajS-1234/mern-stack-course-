
// ham log ke pass kuc command hota hai jisko run karte hi us element ko object bana ke deta hai  

/*
who convert html element into object 
browser have some feature and provide syntax , we can change html file into object with help of syntax
*/

/*
// frist select Elemet based on the id which want to manipulate

// getElementById(object) -> it is an return an single DOM object

const temp=window.document.getElementById("frist");
typeof temp
'object'

temp.textContent="i am rajneesh";
'i am rajneesh'
temp.style.backgroundColor="yellow";
'yellow'


// window  
window is the global object in the browser

window
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
temp
<h1 style=​"background-color:​ yellow;​ color:​ brown;​" id=​"frist">​i am rajneesh​</h1>​
console.dir(temp);
VM1273:1 h1#fristaccessKey: ""align: ""ariaActiveDescendantElement: nullariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColIndexText: nullariaColSpan: nullariaControlsElements: nullariaCurrent: nullariaDescribedByElements: nullariaDescription: nullariaDetailsElements: nullariaDisabled: nullariaErrorMessageElements: nullariaExpanded: nullariaFlowToElements: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLabelledByElements: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowIndexText: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 2}attributes: NamedNodeMap {0: style, 1: id, style: style, id: id, length: 2}autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:5502/03JAVASCRIPT/Day13/01_index.html"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']className: ""clientHeight: 38clientLeft: 0clientTop: 0clientWidth: 538contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}dir: ""draggable: falseeditContext: nullelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: "frist"inert: falseinnerHTML: "i am rajneesh"innerText: "i am rajneesh"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "h1"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h2#secondnextSibling: textnodeName: "H1"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 38offsetLeft: 8offsetParent: bodyoffsetTop: 21offsetWidth: 538onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncommand: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonscrollsnapchange: nullonscrollsnapchanging: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontouchcancel: nullontouchend: nullontouchmove: nullontouchstart: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<h1 style=\"background-color: yellow; color: brown;\" id=\"frist\">i am rajneesh</h1>"outerText: "i am rajneesh"ownerDocument: documentparentElement: bodyparentNode: bodypart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: nullpreviousSibling: textrole: nullscrollHeight: 38scrollLeft: 0scrollTop: 0scrollWidth: 538shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {0: 'background-color', 1: 'color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H1"textContent: "i am rajneesh"title: ""translate: truevirtualKeyboardPolicy: ""writingSuggestions: "true"[[Prototype]]: HTMLHeadingElement
undefined
window
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
window.alert();
undefined
window.open();
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
Object.keys(window);
(242) ['window', 'self', 'document', 'name', 'location', 'customElements', 'history', 'navigation', 'locationbar', 'menubar', 'personalbar', 'scrollbars', 'statusbar', 'toolbar', 'status', 'closed', 'frames', 'length', 'top', 'opener', 'parent', 'frameElement', 'navigator', 'origin', 'external', 'screen', 'innerWidth', 'innerHeight', 'scrollX', 'pageXOffset', 'scrollY', 'pageYOffset', 'visualViewport', 'screenX', 'screenY', 'outerWidth', 'outerHeight', 'devicePixelRatio', 'event', 'clientInformation', 'screenLeft', 'screenTop', 'styleMedia', 'onsearch', 'onappinstalled', 'onbeforeinstallprompt', 'onabort', 'onbeforeinput', 'onbeforematch', 'onbeforetoggle', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncommand', 'oncontentvisibilityautostatechange', 'oncontextlost', 'oncontextmenu', 'oncontextrestored', 'oncuechange', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformdata', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onreset', …]
browser have some feature and provide syntax , we can change html file into object with help of syntax
*/
