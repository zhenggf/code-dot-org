var studio_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){studio_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){studio_locale.c(d,k);return d[k] in p?p[d[k]]:(k=studio_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){studio_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).studio_locale = {
"actor":function(d){return "ator"},
"addCharacter":function(d){return "add a"},
"addCharacterTooltip":function(d){return "Add a character to the scene."},
"alienInvasion":function(d){return "Invasão de extra terrestres!"},
"backgroundBlack":function(d){return "preto"},
"backgroundCave":function(d){return "caverna"},
"backgroundCloudy":function(d){return "nublado"},
"backgroundHardcourt":function(d){return "campo de ténis"},
"backgroundNight":function(d){return "noite"},
"backgroundUnderwater":function(d){return "debaixo de água"},
"backgroundCity":function(d){return "cidade"},
"backgroundDesert":function(d){return "deserto"},
"backgroundRainbow":function(d){return "arco-íris"},
"backgroundSoccer":function(d){return "futebol"},
"backgroundSpace":function(d){return "espaço"},
"backgroundTennis":function(d){return "ténis"},
"backgroundWinter":function(d){return "inverno"},
"calloutPlaceCommandsHere":function(d){return "Place commands here"},
"calloutPlaceCommandsAtTop":function(d){return "Place commands to set up your game at the top"},
"calloutTypeCommandsHere":function(d){return "Type your commands here"},
"calloutCharactersMove":function(d){return "These new commands let you control how the characters move"},
"calloutPutCommandsTouchCharacter":function(d){return "Put a command here to have it happen when you touch a character"},
"calloutClickCategory":function(d){return "Click a category header to see commands in each category"},
"calloutTryOutNewCommands":function(d){return "Try out all the new commands you’ve unlocked"},
"catActions":function(d){return "Ações"},
"catControl":function(d){return "ciclos"},
"catEvents":function(d){return "Eventos"},
"catLogic":function(d){return "Lógica"},
"catMath":function(d){return "Matemática"},
"catProcedures":function(d){return "Funções"},
"catText":function(d){return "texto"},
"catVariables":function(d){return "variáveis"},
"changeScoreTooltip":function(d){return "Adicionar ou remover um ponto à pontuação."},
"changeScoreTooltipK1":function(d){return "Adicionar um ponto à pontuação."},
"continue":function(d){return "Continuar"},
"decrementPlayerScore":function(d){return "remover o ponto"},
"defaultSayText":function(d){return "digita aqui"},
"dropletBlock_addCharacter_description":function(d){return "Add a character to the scene."},
"dropletBlock_addCharacter_param0":function(d){return "type"},
"dropletBlock_addCharacter_param0_description":function(d){return "The type of the character to be added ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_changeScore_description":function(d){return "Adicionar ou remover um ponto à pontuação."},
"dropletBlock_changeScore_param0":function(d){return "pontuação"},
"dropletBlock_changeScore_param0_description":function(d){return "The value to add to the score (negative values will reduce the score)."},
"dropletBlock_moveRight_description":function(d){return "Moves the character to the right."},
"dropletBlock_moveUp_description":function(d){return "Moves the character up."},
"dropletBlock_moveDown_description":function(d){return "Moves the character down."},
"dropletBlock_moveLeft_description":function(d){return "Moves the character left."},
"dropletBlock_moveSlow_description":function(d){return "Changes a set of characters to move slowly."},
"dropletBlock_moveSlow_param0":function(d){return "type"},
"dropletBlock_moveSlow_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_moveNormal_description":function(d){return "Changes a set of characters to move at a normal speed."},
"dropletBlock_moveNormal_param0":function(d){return "type"},
"dropletBlock_moveNormal_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_moveFast_description":function(d){return "Changes a set of characters to move quickly."},
"dropletBlock_moveFast_param0":function(d){return "type"},
"dropletBlock_moveFast_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_playSound_description":function(d){return "Tocar o som escolhido."},
"dropletBlock_playSound_param0":function(d){return "sound"},
"dropletBlock_playSound_param0_description":function(d){return "The name of the sound to play."},
"dropletBlock_setBackground_description":function(d){return "Define a imagem de fundo"},
"dropletBlock_setBackground_param0":function(d){return "image"},
"dropletBlock_setBackground_param0_description":function(d){return "The name of the background theme ('background1', 'background2', or 'background3')."},
"dropletBlock_setBot_description":function(d){return "Changes the active bot."},
"dropletBlock_setBot_param0":function(d){return "imagem"},
"dropletBlock_setBot_param0_description":function(d){return "The name of the bot image ('random', 'bot1', or 'bot2')."},
"dropletBlock_setBotSpeed_description":function(d){return "Sets the bot speed."},
"dropletBlock_setBotSpeed_param0":function(d){return "velocidade"},
"dropletBlock_setBotSpeed_param0_description":function(d){return "The speed value ('random', 'slow', 'normal', or 'fast')."},
"dropletBlock_setSpriteEmotion_description":function(d){return "Define o humor da personagem"},
"dropletBlock_setSpritePosition_description":function(d){return "Move instantaneamente uma personagem para o local especificado."},
"dropletBlock_setSpriteSpeed_description":function(d){return "Define a velocidade de uma personagem"},
"dropletBlock_setSprite_description":function(d){return "Define a imagem da personagem"},
"dropletBlock_setSprite_param0":function(d){return "índice"},
"dropletBlock_setSprite_param0_description":function(d){return "The index (starting at 0) indicating which actor should change."},
"dropletBlock_setSprite_param1":function(d){return "imagem"},
"dropletBlock_setSprite_param1_description":function(d){return "The name of the actor image."},
"dropletBlock_setToChase_description":function(d){return "Changes a set of characters to chase the bot."},
"dropletBlock_setToChase_param0":function(d){return "type"},
"dropletBlock_setToChase_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToFlee_description":function(d){return "Changes a set of characters to flee from the bot."},
"dropletBlock_setToFlee_param0":function(d){return "type"},
"dropletBlock_setToFlee_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToRoam_description":function(d){return "Changes a set of characters to roam freely."},
"dropletBlock_setToRoam_param0":function(d){return "type"},
"dropletBlock_setToRoam_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToStop_description":function(d){return "Changes a set of characters to stop moving."},
"dropletBlock_setToStop_param0":function(d){return "type"},
"dropletBlock_setToStop_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setMap_description":function(d){return "Changes the map in the scene."},
"dropletBlock_setMap_param0":function(d){return "name"},
"dropletBlock_setMap_param0_description":function(d){return "The name of the map ('random', 'blank', 'circle', 'circle2', 'horizontal', 'grid', or 'blobs')."},
"dropletBlock_throw_description":function(d){return "Lança um projétil a partir da personagem especificada."},
"dropletBlock_vanish_description":function(d){return "Faz a personagem desaparecer."},
"dropletBlock_whenDown_description":function(d){return "This function executes when the down button is pressed."},
"dropletBlock_whenLeft_description":function(d){return "This function executes when the left button is pressed."},
"dropletBlock_whenRight_description":function(d){return "This function executes when the right button is pressed."},
"dropletBlock_whenTouchCharacter_description":function(d){return "This function executes when the character touches any character."},
"dropletBlock_whenTouchObstacle_description":function(d){return "This function executes when the character touches any obstacle."},
"dropletBlock_whenTouchMan_description":function(d){return "This function executes when the character touches man characters."},
"dropletBlock_whenTouchPilot_description":function(d){return "This function executes when the character touches pilot characters."},
"dropletBlock_whenTouchPig_description":function(d){return "This function executes when the character touches pig characters."},
"dropletBlock_whenTouchBird_description":function(d){return "This function executes when the character touches bird characters."},
"dropletBlock_whenTouchMouse_description":function(d){return "This function executes when the character touches mouse characters."},
"dropletBlock_whenTouchRoo_description":function(d){return "This function executes when the character touches roo characters."},
"dropletBlock_whenTouchSpider_description":function(d){return "This function executes when the character touches spider characters."},
"dropletBlock_whenUp_description":function(d){return "This function executes when the up button is pressed."},
"emotion":function(d){return "humor"},
"finalLevel":function(d){return "Parabéns! Resolveste o enigma final."},
"for":function(d){return "para"},
"hello":function(d){return "olá"},
"helloWorld":function(d){return "Olá, mundo!"},
"incrementPlayerScore":function(d){return "marcar um ponto"},
"itemBlueFireball":function(d){return "bola de fogo azul"},
"itemPurpleFireball":function(d){return "bola de fogo roxa"},
"itemRedFireball":function(d){return "bola de fogo vermelha"},
"itemYellowHearts":function(d){return "corações amarelos"},
"itemPurpleHearts":function(d){return "corações roxos"},
"itemRedHearts":function(d){return "corações vermelhos"},
"itemRandom":function(d){return "aleatório"},
"itemAnna":function(d){return "gancho"},
"itemElsa":function(d){return "centelha"},
"itemHiro":function(d){return "microrrobôs"},
"itemBaymax":function(d){return "foguetão"},
"itemRapunzel":function(d){return "panela"},
"itemCherry":function(d){return "cereja"},
"itemIce":function(d){return "gelo"},
"itemDuck":function(d){return "pato"},
"itemMan":function(d){return "man"},
"itemPilot":function(d){return "pilot"},
"itemPig":function(d){return "pig"},
"itemBird":function(d){return "bird"},
"itemMouse":function(d){return "mouse"},
"itemRoo":function(d){return "roo"},
"itemSpider":function(d){return "spider"},
"makeProjectileDisappear":function(d){return "desaparecer"},
"makeProjectileBounce":function(d){return "saltar"},
"makeProjectileBlueFireball":function(d){return "criar bola de fogo azul"},
"makeProjectilePurpleFireball":function(d){return "criar bola de fogo roxa"},
"makeProjectileRedFireball":function(d){return "criar bola de fogo vermelha"},
"makeProjectileYellowHearts":function(d){return "criar corações amarelos"},
"makeProjectilePurpleHearts":function(d){return "criar corações roxos"},
"makeProjectileRedHearts":function(d){return "criar corações vermelhos"},
"makeProjectileTooltip":function(d){return "Fazer com que o foguetão que colidiu desapareça ou salte."},
"makeYourOwn":function(d){return "Cria a tua própria aplicação de laboratório"},
"moveDirectionDown":function(d){return "para baixo"},
"moveDirectionLeft":function(d){return "esquerda"},
"moveDirectionRight":function(d){return "direita"},
"moveDirectionUp":function(d){return "cima"},
"moveDirectionRandom":function(d){return "aleatório"},
"moveDistance25":function(d){return "25 píxeis"},
"moveDistance50":function(d){return "50 píxeis"},
"moveDistance100":function(d){return "100 píxeis"},
"moveDistance200":function(d){return "200 píxeis"},
"moveDistance400":function(d){return "400 píxeis"},
"moveDistancePixels":function(d){return "pixels"},
"moveDistanceRandom":function(d){return "píxeis aleatórios"},
"moveDistanceTooltip":function(d){return "Mover uma personagem numa distância específica e na direção indicada."},
"moveSprite":function(d){return "mover"},
"moveSpriteN":function(d){return "mover o personagem "+studio_locale.v(d,"spriteIndex")},
"toXY":function(d){return "para x,y"},
"moveDown":function(d){return "mover para baixo"},
"moveDownTooltip":function(d){return "Mover uma personagem para baixo."},
"moveLeft":function(d){return "mover para a esquerda"},
"moveLeftTooltip":function(d){return "Mover uma personagem para a esquerda."},
"moveRight":function(d){return "mover para a direita"},
"moveRightTooltip":function(d){return "Mover uma personagem para a direita."},
"moveUp":function(d){return "mover para cima"},
"moveUpTooltip":function(d){return "Mover uma personagem para cima."},
"moveTooltip":function(d){return "Mover uma personagem."},
"nextLevel":function(d){return "Parabéns! Completaste este puzzle."},
"no":function(d){return "Não"},
"numBlocksNeeded":function(d){return "Este desafio pode ser resolvido com %1 blocos."},
"onEventTooltip":function(d){return "Executar o código em resposta ao evento especificado."},
"ouchExclamation":function(d){return "Au!"},
"playSoundCrunch":function(d){return "toca som de triturar"},
"playSoundGoal1":function(d){return "tocar som do objetivo 1"},
"playSoundGoal2":function(d){return "tocar som do objetivo 2"},
"playSoundHit":function(d){return "tocar som de embate"},
"playSoundLosePoint":function(d){return "tocar som de ponto perdido"},
"playSoundLosePoint2":function(d){return "tocar som de ponto perdido 2"},
"playSoundRetro":function(d){return "tocar som retro"},
"playSoundRubber":function(d){return "tocar som de borracha"},
"playSoundSlap":function(d){return "tocar som de chapada"},
"playSoundTooltip":function(d){return "Tocar o som escolhido."},
"playSoundWinPoint":function(d){return "tocar som de ponto ganho"},
"playSoundWinPoint2":function(d){return "tocar som de ponto ganho 2"},
"playSoundWood":function(d){return "tocar som de madeira"},
"positionOutTopLeft":function(d){return "para a posição superior esquerda acima"},
"positionOutTopRight":function(d){return "para a posição superior direita acima"},
"positionTopOutLeft":function(d){return "para a posição superior esquerda externa"},
"positionTopLeft":function(d){return "para a posição superior esquerda"},
"positionTopCenter":function(d){return "para a posição superior central"},
"positionTopRight":function(d){return "para a posição superior direita"},
"positionTopOutRight":function(d){return "para a posição superior direita externa"},
"positionMiddleLeft":function(d){return "para a posição central esquerda"},
"positionMiddleCenter":function(d){return "para a posição central do centro"},
"positionMiddleRight":function(d){return "para a posição central direita"},
"positionBottomOutLeft":function(d){return "para a posição inferior esquerda externa"},
"positionBottomLeft":function(d){return "para a posição inferior esquerda"},
"positionBottomCenter":function(d){return "para a posição inferior central"},
"positionBottomRight":function(d){return "para a posição inferior direita"},
"positionBottomOutRight":function(d){return "para a posição inferior direita externa"},
"positionOutBottomLeft":function(d){return "para a posição inferior esquerda abaixo"},
"positionOutBottomRight":function(d){return "para a posição inferior direita abaixo"},
"positionRandom":function(d){return "para a posição aleatória"},
"projectileBlueFireball":function(d){return "bola de fogo azul"},
"projectilePurpleFireball":function(d){return "bola de fogo roxa"},
"projectileRedFireball":function(d){return "bola de fogo vermelha"},
"projectileYellowHearts":function(d){return "corações amarelos"},
"projectilePurpleHearts":function(d){return "corações roxos"},
"projectileRedHearts":function(d){return "corações vermelhos"},
"projectileRandom":function(d){return "aleatório"},
"projectileAnna":function(d){return "gancho"},
"projectileElsa":function(d){return "centelha"},
"projectileHiro":function(d){return "microrrobôs"},
"projectileBaymax":function(d){return "foguetão"},
"projectileRapunzel":function(d){return "panela"},
"projectileCherry":function(d){return "cereja"},
"projectileIce":function(d){return "gelo"},
"projectileDuck":function(d){return "pato"},
"reinfFeedbackMsg":function(d){return "Podes clicar no botão \""+studio_locale.v(d,"backButton")+"\" para voltares a jogar a tua história."},
"repeatForever":function(d){return "repetir para sempre"},
"repeatDo":function(d){return "isto:"},
"repeatForeverTooltip":function(d){return "Executar as ações neste bloco repetidamente enquanto a história é contada."},
"saySprite":function(d){return "dizer"},
"saySpriteN":function(d){return "a personagem "+studio_locale.v(d,"spriteIndex")+" diz"},
"saySpriteTooltip":function(d){return "Mostrar um balão de fala com o texto relacionado com a personagem especificada."},
"saySpriteChoices_0":function(d){return "Olá."},
"saySpriteChoices_1":function(d){return "Olá a todos."},
"saySpriteChoices_2":function(d){return "Tudo bem?"},
"saySpriteChoices_3":function(d){return "Bom dia"},
"saySpriteChoices_4":function(d){return "Boa tarde"},
"saySpriteChoices_5":function(d){return "Boa noite"},
"saySpriteChoices_6":function(d){return "Boa noite"},
"saySpriteChoices_7":function(d){return "Quais são as novidades?"},
"saySpriteChoices_8":function(d){return "O quê?"},
"saySpriteChoices_9":function(d){return "Onde?"},
"saySpriteChoices_10":function(d){return "Quando?"},
"saySpriteChoices_11":function(d){return "Boa."},
"saySpriteChoices_12":function(d){return "Ótimo!"},
"saySpriteChoices_13":function(d){return "Certo."},
"saySpriteChoices_14":function(d){return "Nada mau."},
"saySpriteChoices_15":function(d){return "Boa sorte."},
"saySpriteChoices_16":function(d){return "Sim"},
"saySpriteChoices_17":function(d){return "Não"},
"saySpriteChoices_18":function(d){return "Ok"},
"saySpriteChoices_19":function(d){return "Belo lançamento!"},
"saySpriteChoices_20":function(d){return "Diverte-te."},
"saySpriteChoices_21":function(d){return "Adeus."},
"saySpriteChoices_22":function(d){return "Volto já."},
"saySpriteChoices_23":function(d){return "Até amanhã!"},
"saySpriteChoices_24":function(d){return "Até logo!"},
"saySpriteChoices_25":function(d){return "Fica bem!"},
"saySpriteChoices_26":function(d){return "Aproveita!"},
"saySpriteChoices_27":function(d){return "Tenho de ir."},
"saySpriteChoices_28":function(d){return "Queres ser meu amigo?"},
"saySpriteChoices_29":function(d){return "Bom trabalho!"},
"saySpriteChoices_30":function(d){return "Woo hoo!"},
"saySpriteChoices_31":function(d){return "Yay!"},
"saySpriteChoices_32":function(d){return "Muito prazer."},
"saySpriteChoices_33":function(d){return "Está bem!"},
"saySpriteChoices_34":function(d){return "Obrigado"},
"saySpriteChoices_35":function(d){return "Não, obrigado"},
"saySpriteChoices_36":function(d){return "Aaaaaah!"},
"saySpriteChoices_37":function(d){return "Não faz mal"},
"saySpriteChoices_38":function(d){return "Hoje"},
"saySpriteChoices_39":function(d){return "Amanhã"},
"saySpriteChoices_40":function(d){return "Ontem"},
"saySpriteChoices_41":function(d){return "Encontrei-te!"},
"saySpriteChoices_42":function(d){return "Encontraste-me!"},
"saySpriteChoices_43":function(d){return "10, 9, 8, 7, 6, 5, 4, 3, 2, 1!"},
"saySpriteChoices_44":function(d){return "És ótimo!"},
"saySpriteChoices_45":function(d){return "És engraçado!"},
"saySpriteChoices_46":function(d){return "És maroto! "},
"saySpriteChoices_47":function(d){return "És um bom amigo!"},
"saySpriteChoices_48":function(d){return "Tem cuidado!"},
"saySpriteChoices_49":function(d){return "Bolas!"},
"saySpriteChoices_50":function(d){return "Apanhei-te!"},
"saySpriteChoices_51":function(d){return "Au!"},
"saySpriteChoices_52":function(d){return "Desculpa!"},
"saySpriteChoices_53":function(d){return "Tem cuidado!"},
"saySpriteChoices_54":function(d){return "Uau!"},
"saySpriteChoices_55":function(d){return "Ups!"},
"saySpriteChoices_56":function(d){return "Quase me apanhavas!"},
"saySpriteChoices_57":function(d){return "Boa tentativa!"},
"saySpriteChoices_58":function(d){return "Não me apanhas!"},
"scoreText":function(d){return "Pontuação: "+studio_locale.v(d,"playerScore")},
"setActivityRandom":function(d){return "definir a atividade como aleatória"},
"setActivityRoam":function(d){return "set activity to roam for"},
"setActivityChase":function(d){return "definir a atividade como perseguir"},
"setActivityFlee":function(d){return "definir atividade como fugir para"},
"setActivityNone":function(d){return "definir a atividade como nenhuma para"},
"setActivityTooltip":function(d){return "Definir a atividade de um conjunto de itens"},
"setBackground":function(d){return "definir o fundo"},
"setBackgroundRandom":function(d){return "definir o fundo como: aleatório"},
"setBackgroundBlack":function(d){return "definir o fundo como: preto"},
"setBackgroundCave":function(d){return "definir o fundo como: gruta"},
"setBackgroundCloudy":function(d){return "definir o fundo como: nublado"},
"setBackgroundHardcourt":function(d){return "definir o fundo como: campo de ténis"},
"setBackgroundNight":function(d){return "definir o fundo como: noite"},
"setBackgroundUnderwater":function(d){return "definir o fundo como: debaixo de água"},
"setBackgroundCity":function(d){return "definir o fundo como: cidade"},
"setBackgroundDesert":function(d){return "definir o fundo como: deserto"},
"setBackgroundRainbow":function(d){return "definir o fundo como: arco-íris"},
"setBackgroundSoccer":function(d){return "definir o fundo como: futebol"},
"setBackgroundSpace":function(d){return "definir o fundo como: espaço sideral"},
"setBackgroundTennis":function(d){return "definir o fundo como: jogo de ténis"},
"setBackgroundWinter":function(d){return "definir o fundo como: inverno"},
"setBackgroundLeafy":function(d){return "definir o fundo como: outono"},
"setBackgroundGrassy":function(d){return "definir o fundo como: relva"},
"setBackgroundFlower":function(d){return "definir o fundo como: flores"},
"setBackgroundTile":function(d){return "definir o fundo como: mosaicos"},
"setBackgroundIcy":function(d){return "definir o fundo como: gelo"},
"setBackgroundSnowy":function(d){return "definir o fundo como: neve"},
"setBackgroundForest":function(d){return "set forest background"},
"setBackgroundSnow":function(d){return "set snow background"},
"setBackgroundShip":function(d){return "set ship background"},
"setBackgroundTooltip":function(d){return "Define a imagem de fundo"},
"setEnemySpeed":function(d){return "definir velocidade do inimigo"},
"setItemSpeedSet":function(d){return "definir o tipo"},
"setItemSpeedTooltip":function(d){return "Define a velocidade de um conjunto de items"},
"setPlayerSpeed":function(d){return "definir velocidade do jogador"},
"setScoreText":function(d){return "definir pontuação"},
"setScoreTextTooltip":function(d){return "Define o texto que vai ser mostrado na área de pontuação."},
"setSpriteEmotionAngry":function(d){return "como irritado"},
"setSpriteEmotionHappy":function(d){return "como feliz"},
"setSpriteEmotionNormal":function(d){return "como normal"},
"setSpriteEmotionRandom":function(d){return "como aleatório"},
"setSpriteEmotionSad":function(d){return "como triste"},
"setSpriteEmotionTooltip":function(d){return "Define o humor da personagem"},
"setSpriteAlien":function(d){return "como um extraterrestre"},
"setSpriteBat":function(d){return "como um morcego"},
"setSpriteBird":function(d){return "como um pássaro"},
"setSpriteCat":function(d){return "como um gato"},
"setSpriteCaveBoy":function(d){return "como um menino das cavernas"},
"setSpriteCaveGirl":function(d){return "como uma menina das cavernas"},
"setSpriteDinosaur":function(d){return "como um dinossauro"},
"setSpriteDog":function(d){return "como um cão"},
"setSpriteDragon":function(d){return "como um dragão"},
"setSpriteGhost":function(d){return "como um fantasma"},
"setSpriteHidden":function(d){return "como oculto"},
"setSpriteHideK1":function(d){return "ocultar"},
"setSpriteAnna":function(d){return "como a Anna"},
"setSpriteElsa":function(d){return "como a Elsa"},
"setSpriteHiro":function(d){return "como o Hiro"},
"setSpriteBaymax":function(d){return "como o Baymax"},
"setSpriteRapunzel":function(d){return "como a Rapunzel"},
"setSpriteKnight":function(d){return "como um cavaleiro"},
"setSpriteMonster":function(d){return "como um monstro"},
"setSpriteNinja":function(d){return "como um ninja mascarado"},
"setSpriteOctopus":function(d){return "como um polvo"},
"setSpritePenguin":function(d){return "como um pinguim"},
"setSpritePirate":function(d){return "como um pirata"},
"setSpritePrincess":function(d){return "como uma princesa"},
"setSpriteRandom":function(d){return "como aleatória"},
"setSpriteRobot":function(d){return "como um robô"},
"setSpriteShowK1":function(d){return "mostrar"},
"setSpriteSpacebot":function(d){return "como um robô sideral"},
"setSpriteSoccerGirl":function(d){return "como uma jogadora de futebol"},
"setSpriteSoccerBoy":function(d){return "como um jogador de futebol"},
"setSpriteSquirrel":function(d){return "como um esquilo"},
"setSpriteTennisGirl":function(d){return "como uma jogadora de ténis"},
"setSpriteTennisBoy":function(d){return "como um jogador de ténis"},
"setSpriteUnicorn":function(d){return "como um unicórnio"},
"setSpriteWitch":function(d){return "como uma bruxa"},
"setSpriteWizard":function(d){return "como um feiticeiro"},
"setSpritePositionTooltip":function(d){return "Move instantaneamente uma personagem para o local especificado."},
"setSpriteK1Tooltip":function(d){return "Mostra ou oculta a personagem especificado."},
"setSpriteTooltip":function(d){return "Define a imagem da personagem"},
"setSpriteSizeRandom":function(d){return "para um tamanho aleatório"},
"setSpriteSizeVerySmall":function(d){return "para um tamanho muito pequeno"},
"setSpriteSizeSmall":function(d){return "para um tamanho pequeno"},
"setSpriteSizeNormal":function(d){return "para um tamanho normal"},
"setSpriteSizeLarge":function(d){return "para um tamanho grande"},
"setSpriteSizeVeryLarge":function(d){return "para um tamanho muito grande"},
"setSpriteSizeTooltip":function(d){return "Define o tamanho de uma personagem"},
"setSpriteSpeedRandom":function(d){return "para uma velocidade aleatória"},
"setSpriteSpeedVerySlow":function(d){return "para uma velocidade muito lenta"},
"setSpriteSpeedSlow":function(d){return "para uma velocidade lenta"},
"setSpriteSpeedNormal":function(d){return "para uma velocidade normal"},
"setSpriteSpeedFast":function(d){return "para uma velocidade rápida"},
"setSpriteSpeedVeryFast":function(d){return "para uma velocidade muito rápida"},
"setSpriteSpeedTooltip":function(d){return "Define a velocidade de uma personagem"},
"setSpriteZombie":function(d){return "como um zombie"},
"setSpriteBot1":function(d){return "to bot1"},
"setSpriteBot2":function(d){return "to bot2"},
"setMap":function(d){return "set map"},
"setMapRandom":function(d){return "set random map"},
"setMapBlank":function(d){return "set blank map"},
"setMapCircle":function(d){return "set circle map"},
"setMapCircle2":function(d){return "set circle2 map"},
"setMapHorizontal":function(d){return "set horizontal map"},
"setMapGrid":function(d){return "set grid map"},
"setMapBlobs":function(d){return "set blobs map"},
"setMapTooltip":function(d){return "Changes the map in the scene"},
"shareStudioTwitter":function(d){return "Vê a história que eu fiz. Fui que a escrevi no @codeorg"},
"shareGame":function(d){return "Partilha a tua história:"},
"showCoordinates":function(d){return "mostrar coordenadas"},
"showCoordinatesTooltip":function(d){return "mostrar as coordenadas do protagonista no ecrã"},
"showTitleScreen":function(d){return "mostrar ecrã inicial"},
"showTitleScreenTitle":function(d){return "título"},
"showTitleScreenText":function(d){return "texto"},
"showTSDefTitle":function(d){return "digita o título aqui"},
"showTSDefText":function(d){return "digita o texto aqui"},
"showTitleScreenTooltip":function(d){return "Mostrar um ecrã inicial com o título e os textos associados."},
"size":function(d){return "tamanho"},
"setSprite":function(d){return "definir"},
"setSpriteN":function(d){return "definir a personagem "+studio_locale.v(d,"spriteIndex")},
"soundCrunch":function(d){return "triturar"},
"soundGoal1":function(d){return "objetivo 1"},
"soundGoal2":function(d){return "objetivo 2"},
"soundHit":function(d){return "batida"},
"soundLosePoint":function(d){return "perder ponto"},
"soundLosePoint2":function(d){return "perder ponto 2"},
"soundRetro":function(d){return "retro"},
"soundRubber":function(d){return "borracha"},
"soundSlap":function(d){return "estalada"},
"soundWinPoint":function(d){return "ganhar ponto"},
"soundWinPoint2":function(d){return "ganhar ponto 2"},
"soundWood":function(d){return "madeira"},
"speed":function(d){return "velocidade"},
"startSetValue":function(d){return "iniciar (função)"},
"startSetVars":function(d){return "game_vars (título, subtítulo, fundo, alvo, perigo, jogador)"},
"startSetFuncs":function(d){return "game_funcs (atualizar alvo, atualizar perigo, atualizar jogador, colidiram?, no ecrã?)"},
"stopSprite":function(d){return "parar"},
"stopSpriteN":function(d){return "parar a personagem "+studio_locale.v(d,"spriteIndex")},
"stopTooltip":function(d){return "Para o movimento de uma personagem."},
"throwSprite":function(d){return "atirar"},
"throwSpriteN":function(d){return "lançamento da personagem "+studio_locale.v(d,"spriteIndex")},
"throwTooltip":function(d){return "Lança um projétil a partir da personagem especificada."},
"vanish":function(d){return "desaparecer"},
"vanishActorN":function(d){return "fazer desaparecer a personagem "+studio_locale.v(d,"spriteIndex")},
"vanishTooltip":function(d){return "Faz a personagem desaparecer."},
"waitFor":function(d){return "esperar por"},
"waitSeconds":function(d){return "segundos"},
"waitForClick":function(d){return "aguardar pelo clique"},
"waitForRandom":function(d){return "aguardar por tempo aleatório"},
"waitForHalfSecond":function(d){return "aguardar por meio segundo"},
"waitFor1Second":function(d){return "aguardar por 1 segundo"},
"waitFor2Seconds":function(d){return "aguardar por 2 segundos"},
"waitFor5Seconds":function(d){return "aguardar por 5 segundos"},
"waitFor10Seconds":function(d){return "aguardar por 10 segundos"},
"waitParamsTooltip":function(d){return "Aguarda por um número determinado de segundos. Usa o zero para esperar até que ocorra um clique."},
"waitTooltip":function(d){return "Aguarda por um determinado período de tempo tempo ou até que ocorra um clique."},
"whenArrowDown":function(d){return "seta para baixo"},
"whenArrowLeft":function(d){return "seta para a esquerda"},
"whenArrowRight":function(d){return "seta para a direita"},
"whenArrowUp":function(d){return "seta para cima"},
"whenArrowTooltip":function(d){return "Executar as seguintes ações quando a tecla com a seta especificada for pressionada."},
"whenDown":function(d){return "quando clicar seta para baixo"},
"whenDownTooltip":function(d){return "Executar as seguintes ações quando a tecla da seta para baixo for pressionada."},
"whenGameStarts":function(d){return "quando a história começa"},
"whenGameStartsTooltip":function(d){return "Executar as seguintes ações quando a história começar."},
"whenLeft":function(d){return "quando clicar seta para a esquerda"},
"whenLeftTooltip":function(d){return "Executar as seguintes ações quando a tecla da seta para a esquerda for pressionada."},
"whenRight":function(d){return "quando clicar seta para a direita"},
"whenRightTooltip":function(d){return "Executar as seguintes ações quando a tecla da seta para a direita for pressionada."},
"whenSpriteClicked":function(d){return "quando clicar na personagem"},
"whenSpriteClickedN":function(d){return "quando clicar na personagem "+studio_locale.v(d,"spriteIndex")},
"whenSpriteClickedTooltip":function(d){return "Executar as seguintes ações quando clicares numa personagem."},
"whenSpriteCollidedN":function(d){return "quando a personagem "+studio_locale.v(d,"spriteIndex")},
"whenSpriteCollidedTooltip":function(d){return "Executar as seguintes ações quando uma personagem tocar noutra personagem."},
"whenSpriteCollidedWith":function(d){return "toca"},
"whenSpriteCollidedWithAnyActor":function(d){return "toca em qualquer personagem"},
"whenSpriteCollidedWithAnyEdge":function(d){return "toca em qualquer margem"},
"whenSpriteCollidedWithAnyProjectile":function(d){return "toca em qualquer projétil"},
"whenSpriteCollidedWithAnything":function(d){return "toca em qualquer coisa"},
"whenSpriteCollidedWithN":function(d){return "toca na personagem "+studio_locale.v(d,"spriteIndex")},
"whenSpriteCollidedWithBlueFireball":function(d){return "toca na bola de fogo azul"},
"whenSpriteCollidedWithPurpleFireball":function(d){return "toca na bola de fogo roxa"},
"whenSpriteCollidedWithRedFireball":function(d){return "toca na bola de fogo vermelha"},
"whenSpriteCollidedWithYellowHearts":function(d){return "toca nos corações amarelos"},
"whenSpriteCollidedWithPurpleHearts":function(d){return "toca nos corações roxos"},
"whenSpriteCollidedWithRedHearts":function(d){return "toca nos corações vermelhos"},
"whenSpriteCollidedWithBottomEdge":function(d){return "toca na margem inferior"},
"whenSpriteCollidedWithLeftEdge":function(d){return "toca na margem esquerda"},
"whenSpriteCollidedWithRightEdge":function(d){return "toca na margem direita"},
"whenSpriteCollidedWithTopEdge":function(d){return "toca na margem superior"},
"whenTouchItem":function(d){return "quando tocar"},
"whenTouchItemTooltip":function(d){return "Executa as ações abaixo quando o ator toca em algo."},
"whenTouchWall":function(d){return "quando toca na parede"},
"whenTouchWallTooltip":function(d){return "Executa as ações abaixo quando o ator tocar na parede."},
"whenUp":function(d){return "quando clicar seta para cima"},
"whenUpTooltip":function(d){return "Executar as seguintes ações quando clicar na seta para cima."},
"yes":function(d){return "Sim"},
"failedHasSetSprite":function(d){return "Next time, set a character."},
"failedHasSetBotSpeed":function(d){return "Next time, set a bot speed."},
"failedTouchAllItems":function(d){return "Next time, get all the items."},
"failedScoreMinimum":function(d){return "Next time, reach the minimum score."},
"failedRemovedItemCount":function(d){return "Next time, get the right number of items."},
"failedSetActivity":function(d){return "Next time, set the correct character activity."},
"calloutPutCommandsHereRunStart":function(d){return "Put commands here to have them run when the program starts"},
"calloutClickEvents":function(d){return "Click on the events header to see event function blocks."},
"calloutUseArrowButtons":function(d){return "Hold down these buttons or the arrow keys on your keyboard to trigger the move events"},
"calloutUseArrowButtonsAutoSteer":function(d){return "You can still use these buttons or the arrow keys on your keyboard to move"},
"calloutMoveRightRunButton":function(d){return "Add a second moveRight command to your code and then click here to run it"},
"calloutShowCodeToggle":function(d){return "Click here to switch between block and text mode"},
"calloutShowPlaceGoUpHere":function(d){return "Place goUp command here to move up"},
"calloutShowPlaySound":function(d){return "It's your game, so you choose the sounds now. Try the dropdown to pick a different sound"},
"calloutInstructions":function(d){return "Don't know what to do? Click the instructions to see them again"},
"calloutPlaceTwo":function(d){return "Can you make two MOUSEs appear when you get one MOUSE?"},
"calloutPlaceTwoWhenBird":function(d){return "Can you make two MOUSEs appear when you get a BIRD?"},
"calloutSetMapAndSpeed":function(d){return "Set the map and your speed."},
"dropletBlock_addPoints_description":function(d){return "Add points to the score."},
"dropletBlock_addPoints_param0":function(d){return "score"},
"dropletBlock_addPoints_param0_description":function(d){return "The value to add to the score."},
"dropletBlock_removePoints_description":function(d){return "Remove points from the score."},
"dropletBlock_removePoints_param0":function(d){return "score"},
"dropletBlock_removePoints_param0_description":function(d){return "The value to remove from the score."},
"dropletBlock_endGame_description":function(d){return "End the game."},
"dropletBlock_endGame_param0":function(d){return "type"},
"dropletBlock_endGame_param0_description":function(d){return "Whether the game was won or lost ('win', 'lose')."},
"dropletBlock_whenGetCharacter_description":function(d){return "This function executes when the character gets any character."},
"dropletBlock_whenGetMan_description":function(d){return "This function executes when the character gets man characters."},
"dropletBlock_whenGetPilot_description":function(d){return "This function executes when the character gets pilot characters."},
"dropletBlock_whenGetPig_description":function(d){return "This function executes when the character gets pig characters."},
"dropletBlock_whenGetBird_description":function(d){return "This function executes when the character gets bird characters."},
"dropletBlock_whenGetMouse_description":function(d){return "This function executes when the character gets mouse characters."},
"dropletBlock_whenGetRoo_description":function(d){return "This function executes when the character gets roo characters."},
"dropletBlock_whenGetSpider_description":function(d){return "This function executes when the character gets spider characters."},
"itemIAProjectile1":function(d){return "item 1"},
"itemIAProjectile2":function(d){return "item 2"},
"itemIAProjectile3":function(d){return "item 3"},
"itemIAProjectile4":function(d){return "item 4"},
"itemIAProjectile5":function(d){return "item 5"},
"loseMessage":function(d){return "You lose!"},
"projectileIAProjectile1":function(d){return "projectile 1"},
"projectileIAProjectile2":function(d){return "projectile 2"},
"projectileIAProjectile3":function(d){return "projectile 3"},
"projectileIAProjectile4":function(d){return "projectile 4"},
"projectileIAProjectile5":function(d){return "projectile 5"},
"setSpriteManny":function(d){return "to a Manny image"},
"setSpriteSid":function(d){return "to a Sid image"},
"setSpriteGranny":function(d){return "to a Granny image"},
"setSpriteDiego":function(d){return "to a Diego image"},
"setSpriteScrat":function(d){return "to a Scrat image"},
"winMessage":function(d){return "You win!"},
"failedHasSetBackground":function(d){return "Next time, set the background."},
"failedHasSetMap":function(d){return "Next time, set the map."},
"failedHasWonGame":function(d){return "Next time, win the game."},
"failedHasLostGame":function(d){return "Next time, lose the game"},
"failedAddItem":function(d){return "Next time, add a character."},
"failedAvoidHazard":function(d){return "\"Uh oh, a GUY got you!  Try again.\""},
"failedHasAllGoals":function(d){return "\"Try again, BOTX.  You can get it.\""},
"successHasAllGoals":function(d){return "\"You did it, BOTX!\""},
"successCharacter1":function(d){return "\"Well done, BOT1!\""},
"successGenericCharacter":function(d){return "\"Congratulations.  You did it!\""},
"failedTwoItemsTimeout":function(d){return "You need to get the pilots before time runs out. To move, put the goUp and goDown commands inside the whenUp and whenDown functions. Then, press and hold the arrow keys on your keyboard (or screen) to move quickly."},
"failedFourItemsTimeout":function(d){return "To pass this level, you'll need to put goLeft, goRight, goUp and go Down into the right functions. If your code looks correct, but you can't get there fast enough, try pressing and holding the arrow keys on your keyboard (or screen)."},
"failedScoreTimeout":function(d){return "Try to reach all the pilots before time runs out. To move faster, press and hold the arrow keys on your keyboard (or screen)."},
"failedScoreScore":function(d){return "You got the pilots, but you still don't have enough points to pass the level. Use the addPoints command to add 100 points when you get a pilot."},
"failedScoreGoals":function(d){return "You used the addPoints command, but not in the right place. Can you put it inside the whenGetPilot function so BOT1 can't get points until he gets a pilot?"},
"failedWinLoseTimeout":function(d){return "Try to reach all the pilots before time runs out. To move faster, press and hold the arrow keys on your keyboard (or screen)."},
"failedWinLoseScore":function(d){return "You got the pilots, but you still don't have enough points to pass the level. Use the addPoints command to add 100 points when you get a pilot. Use removePoints to subtract 100 when you touch a MAN. Avoid the MANs!"},
"failedWinLoseGoals":function(d){return "You used the addPoints command, but not in the right place. Can you make it so that the command is only called when you get the pilot? Also, remove points when you touch the MAN."},
"failedAddCharactersTimeout":function(d){return "Use three addCharacter commands at the top of your program to add PIGs when you hit run. Now go get them."},
"failedChainCharactersTimeout":function(d){return "You need to get 20 MOUSEs. They move fast. Try pressing and holding the keys on your keyboard (or screen) to chase them."},
"failedChainCharactersScore":function(d){return "You got the MOUSEs, but you don't have enough points to move to the next level. Make sure you add 100 points to your score every time you get a MOUSE?"},
"failedChainCharactersItems":function(d){return "You used the addPoints command, but not in the right place.  Can you make it so that the command is only called when you get the MOUSEs?"},
"failedChainCharacters2Timeout":function(d){return "You need to get 8 MOUSEs. Can you make two (or more) of them appear every time you get a ROO?"},
"failedChangeSettingTimeout":function(d){return "Get 3 pilots to move on."},
"failedChangeSettingSettings":function(d){return "Make the level your own. To pass this level, you need to change the map and set your speed."}};