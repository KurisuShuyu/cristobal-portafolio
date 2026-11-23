/* ===== TUS CANCIONES =====
   1) Copia los archivos dentro de la carpeta assets/Musica/ (y sube esa carpeta a GitHub).
   2) Agrégalos abajo, una línea por canción, SIN olvidar la coma al final.

   archivo : nombre exacto del archivo (respeta mayúsculas y la extensión)
   titulo, artista : opcionales, se ven en el reproductor
   tema    : opcional. 'normal' | 'vip' | 'hacker' | 'aero' | 'undertale'
             (también vale el nombre visible: medianoche, oro, terminal, aqua, subsuelo)
             Con tema, suena sola de fondo cuando ese estilo está activo. Puedes repetir el mismo tema.
   fondo   : opcional. Imagen que se muestra mientras suena esa canción.

   Ejemplo (quita las // para activarlo): */
var CARPETA = 'assets/Musica/';
var MUSICA = [
  // {archivo:'cancion1.mp3', titulo:'Título 1', artista:'Artista', tema:'undertale', fondo:'assets/Fondos/imagen1.jpg'},
  // {archivo:'cancion2.mp3', titulo:'Título 2', artista:'Artista', tema:'undertale'},
  // {archivo:'cancion3.mp3', titulo:'Título 3', artista:'Artista', tema:'undertale'},
  {archivo:'Aero.mp3', titulo:'Mii', artista:'Aero', tema:'aero'},
  {archivo:'Home-Day.mp3', titulo:'Home', artista:'Toby Fox', tema:'undertale'},
  {archivo:'Hacker1.mp3', titulo:'Hacker 1', artista:'', tema:'hacker'},
  {archivo:'Hacker2.mp3', titulo:'Hacker 2', artista:'', tema:'hacker'},
  {archivo:'002. Start Menu (UNDERTALE Soundtrack) - Toby Fox [5BrJzFtOnwo].mp3', titulo:'Start Menu', artista:'Toby Fox'},
  {archivo:'005. Ruins (UNDERTALE Soundtrack) - Toby Fox [oHZDWwW6iXs].mp3', titulo:'Ruins', artista:'Toby Fox'},
  {archivo:'017. Snowy (UNDERTALE Soundtrack) - Toby Fox [QZ1Jp-Wg7b0].mp3', titulo:'Snowy', artista:'Toby Fox'},
  {archivo:'033. Quiet Water (UNDERTALE Soundtrack) - Toby Fox [4LfRKEovz2Y].mp3', titulo:'Quiet Water', artista:'Toby Fox'},
  {archivo:'063. It\'s Raining Somewhere Else (UNDERTALE Soundtrack) - Toby Fox [KtC-pl9P3kE].mp3', titulo:'It\'s Raining Somewhere Else', artista:'Toby Fox'},
  {archivo:'071. Undertale (UNDERTALE Soundtrack) - Toby Fox [1HIKNbnV8nw].mp3', titulo:'Undertale', artista:'Toby Fox'},
  {archivo:'083. Here We Are (UNDERTALE Soundtrack) - Toby Fox [52olsp3GUqY].mp3', titulo:'Here We Are', artista:'Toby Fox'},
  {archivo:'Home-Night.mp3', titulo:'Home Night', artista:'Toby Fox'},
  {archivo:'bubble fountain [YCMg8zEVWHs].mp3', titulo:'Bubble Fountain', artista:'aero'}
];
