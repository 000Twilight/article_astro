const fs = require('fs');

const data = {
  textSection1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus tellus nec ex pretium, vel finibus lorem sodales.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus.

Aenean non accumsan ante. Aliquam elementum sodales justo ut sodales.

In hac habitasse platea dictumst. Curabitur vel molestie lorem. Vivamus at urna eu nisl dictum eleifend id a lorem.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit,” dicit Lorem Ipsum.

Sed eleifend lectus at nibh feugiat laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Nulla facilisi. Mauris vitae convallis ligula, ac efficitur diam. Cras efficitur sem at finibus feugiat.

Aliquam nec arcu facilisis, ullamcorper dolor eget, placerat magna. Pellentesque non justo non risus rhoncus interdum vel sed lacus.

Cras bibendum interdum finibus. Nullam a eleifend velit. Aliquam sodales rhoncus tellus ac placerat.

Vestibulum facilisis pretium ex, vitae placerat lectus finibus nec. Nullam gravida magna sed rhoncus iaculis.

Duis scelerisque eros eget justo hendrerit vulputate. Proin non risus ac felis elementum placerat sit amet non erat.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus at nibh feugiat laoreet,” dicit Placeholder.

Nam cursus leo ac elementum tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Aliquam sit amet libero ac tellus condimentum rutrum. Maecenas tristique est sit amet leo volutpat semper.

Vestibulum congue feugiat varius. Suspendisse pulvinar, est sed pellentesque elementum, sem leo condimentum ante, sed cursus urna purus vitae ex.

Ut eget purus a erat scelerisque placerat non pretium turpis. Donec sed neque eu libero mattis elementum at id ligula.

Phasellus pretium dictum est vel accumsan. Integer vestibulum elementum tortor et pulvinar. Proin non sem tincidunt, pretium magna et, ultrices augue.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,” dicit Lorem.

Praesent ac rhoncus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Aenean vitae purus iaculis, sagittis ex tempor, dictum tellus. Ut a tristique nunc, eget tristique ex.

Sed imperdiet interdum elementum. Aliquam elementum, eros sit amet hendrerit viverra, ante risus faucibus urna, in tempus libero lacus non diam.

Integer id magna a nisl finibus interdum et id magna. Phasellus pretium accumsan ex sit amet finibus.

Suspendisse eu odio vel sapien ultrices porttitor id ac urna. In vulputate felis ut elit pretium eleifend.

Cras vulputate varius diam, vel porta justo cursus vitae. Curabitur laoreet iaculis metus, vitae posuere elit condimentum id.

Nam id turpis nec magna fermentum suscipit ac at elit. Duis scelerisque rhoncus lectus sit amet posuere.`,

  section2Title: `Lorem Ipsum Dolor Sit Amet`,
  textSection2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elementum lacus, vitae ultrices est.

Quisque luctus est sit amet eros laoreet, ut cursus leo lacinia. Proin scelerisque finibus diam sed efficitur.

Nullam cursus justo ac elementum pulvinar. Praesent eget urna sodales, porttitor nulla sed, eleifend turpis.

Sed efficitur nisl elit, eget commodo dolor maximus vel. Ut lobortis convallis ipsum eu pulvinar.

Fusce pellentesque felis eget diam sodales lobortis. Aliquam vel nibh vitae diam eleifend pretium.

Suspendisse potenti. Nam accumsan ex eu tellus feugiat tristique. Vivamus scelerisque sit amet diam id lacinia.

Aenean nec ex elementum, scelerisque neque aliquet, vestibulum nunc. Vivamus sed erat vitae est finibus accumsan. Sed id augue dolor. Sed molestie tellus ut purus rhoncus porttitor.`,

  textSection3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eros sit amet lorem dapibus condimentum.

Suspendisse pulvinar magna vitae arcu condimentum, feugiat fringilla magna ullamcorper. Donec vulputate odio in justo pretium, non congue leo pellentesque.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris aliquet neque purus, vel varius nibh dictum ac.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id varius tortor, vel vehicula sem.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elementum lacus, vitae ultrices est. Quisque luctus est sit amet eros laoreet, ut cursus leo lacinia,” dicit Lorem Ipsum.

Praesent interdum libero vitae eros iaculis sodales. Mauris tincidunt ipsum eu facilisis luctus. Duis aliquet lectus sit amet scelerisque gravida.

Vivamus elementum elit arcu, at efficitur purus tristique id. Quisque dictum turpis quis elit scelerisque tristique.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tempor hendrerit lorem eu interdum. Proin condimentum sollicitudin leo at congue.

Integer at est at mi convallis convallis vel vitae odio. Integer tincidunt lacus a convallis porta. Etiam condimentum iaculis lacus scelerisque varius.

Duis vulputate tortor purus, ut aliquam leo gravida eleifend. Ut bibendum dictum metus vitae efficitur.

Mauris eu dui ut nulla tempor volutpat eget ut metus. Pellentesque accumsan leo rhoncus libero sodales consectetur.

Curabitur scelerisque eros felis, non mattis tellus hendrerit et. Sed pellentesque quam at dictum egestas.

Vestibulum in finibus odio, vel molestie sem. Quisque imperdiet scelerisque ex sed hendrerit. Aliquam fermentum tristique arcu nec rhoncus. Aliquam erat volutpat.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,” dicit Placeholder.

Proin ac sapien id lorem vulputate interdum vel quis erat. Mauris varius pharetra leo nec lacinia. In vel dolor nisl.

Vivamus congue justo at nulla sollicitudin, non convallis lacus elementum.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus at nibh feugiat laoreet,” dicit Lorem Ipsum Dolor.

Nam molestie ligula id accumsan varius. Fusce feugiat purus quis ante pellentesque varius.

Nullam congue purus sem, non imperdiet risus rhoncus ac. Mauris sit amet ligula id lorem convallis cursus eu sit amet lorem.

In hac habitasse platea dictumst. Ut lobortis, sem sit amet rhoncus pretium, lectus nisl volutpat erat, eget sodales ipsum tellus nec urna. Aliquam varius sollicitudin elementum.

Mauris vestibulum risus ac velit eleifend aliquet. Integer tempor erat diam, tempus accumsan sapien dictum id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,

  textSection4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus tellus nec ex pretium, vel finibus lorem sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,” dicit Placeholder.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,” dicit Lorem Ipsum Dolor.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non enim in turpis pulvinar facilisis. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.

In hac habitasse platea dictumst. Vivamus adipiscing nisi elit, et convallis elit cursus at. Nam quis nulla. Integer malesuada. In in nisi non arcu tincidunt eleifend pretium.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus at nibh feugiat laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae,” dicit Ipsum.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elementum lacus, vitae ultrices est. Quisque luctus est sit amet eros laoreet, ut cursus leo lacinia,” dicit Lorem.`,

  section5Title: `Lorem Ipsum Dolor Sit Amet`,
  textSection5: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elementum lacus, vitae ultrices est. Quisque luctus est sit amet eros laoreet, ut cursus leo lacinia. Proin scelerisque finibus diam sed efficitur.

Nullam cursus justo ac elementum pulvinar. Praesent eget urna sodales, porttitor nulla sed, eleifend turpis. Sed efficitur nisl elit, eget commodo dolor maximus vel. Ut lobortis convallis ipsum eu pulvinar.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elementum lacus, vitae ultrices est. Quisque luctus est sit amet eros laoreet, ut cursus leo lacinia.”

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.” dicit Placeholder.

Fusce pellentesque felis eget diam sodales lobortis. Aliquam vel nibh vitae diam eleifend pretium. Suspendisse potenti. Nam accumsan ex eu tellus feugiat tristique. Vivamus scelerisque sit amet diam id lacinia.

In id imperdiet ante. Ut cursus eros diam, vel molestie turpis facilisis id. Sed imperdiet convallis felis vulputate tincidunt. Pellentesque id elementum diam, in egestas tortor. Sed eget elementum dolor.`,

  textSection6: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus tellus nec ex pretium, vel finibus lorem sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.

Aenean non accumsan ante. Aliquam elementum sodales justo ut sodales. In hac habitasse platea dictumst. Curabitur vel molestie lorem. Vivamus at urna eu nisl dictum eleifend.

Sed eleifend lectus at nibh feugiat laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris vitae convallis ligula, ac efficitur diam.`,

  section7Title: `Lorem Ipsum Dolor Sit Amet`,
  textSection7: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

In id imperdiet ante. Ut cursus eros diam, vel molestie turpis facilisis id. Sed imperdiet convallis felis vulputate tincidunt. Pellentesque id elementum diam, in egestas tortor. Sed eget elementum dolor.

Phasellus eget scelerisque sem. Aliquam non iaculis eros. In iaculis nibh vitae felis suscipit, ut pellentesque sem euismod. Quisque placerat consequat risus id imperdiet. Mauris congue arcu a felis facilisis gravida.

Aliquam interdum nulla at ligula pretium tincidunt. Curabitur in ante nisl. Praesent molestie leo lectus, id tincidunt ex scelerisque ac. Maecenas efficitur lorem at lacus luctus, non elementum turpis maximus.

Aenean nec ex elementum, scelerisque neque aliquet, vestibulum nunc. Vivamus sed erat vitae est finibus accumsan. Sed id augue dolor. Sed molestie tellus ut purus rhoncus porttitor.

Integer at est at mi convallis convallis vel vitae odio. Integer tincidunt lacus a convallis porta. Etiam condimentum iaculis lacus scelerisque varius. Duis vulputate tortor purus, ut aliquam leo gravida eleifend.`,

  textSection8: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

In id imperdiet ante. Ut cursus eros diam, vel molestie turpis facilisis id. Sed imperdiet convallis felis vulputate tincidunt. Pellentesque id elementum diam, in egestas tortor. Sed eget elementum dolor.

Phasellus eget scelerisque sem. Aliquam non iaculis eros. In iaculis nibh vitae felis suscipit, ut pellentesque sem euismod. Quisque placerat consequat risus id imperdiet. Mauris congue arcu a felis facilisis gravida.

Aliquam interdum nulla at ligula pretium tincidunt. Curabitur in ante nisl. Praesent molestie leo lectus, id tincidunt ex scelerisque ac. Maecenas efficitur lorem at lacus luctus, non elementum turpis maximus.

Aenean nec ex elementum, scelerisque neque aliquet, vestibulum nunc. Vivamus sed erat vitae est finibus accumsan. Sed id augue dolor. Sed molestie tellus ut purus rhoncus porttitor.

Integer at est at mi convallis convallis vel vitae odio. Integer tincidunt lacus a convallis porta. Etiam condimentum iaculis lacus scelerisque varius. Duis vulputate tortor purus, ut aliquam leo gravida eleifend.

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.” dicit Placeholder.

Fusce pellentesque felis eget diam sodales lobortis. Aliquam vel nibh vitae diam eleifend pretium. Suspendisse potenti. Nam accumsan ex eu tellus feugiat tristique. Vivamus scelerisque sit amet diam id lacinia.

In id imperdiet ante. Ut cursus eros diam, vel molestie turpis facilisis id. Sed imperdiet convallis felis vulputate tincidunt. Pellentesque id elementum diam, in egestas tortor. Sed eget elementum dolor.`,

  textSection9: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
};

fs.writeFileSync('src/content/homepage/data.json', JSON.stringify(data, null, 2));

console.log("Done");
