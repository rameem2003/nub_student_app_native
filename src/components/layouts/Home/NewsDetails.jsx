import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Title from '../../common/Title';

const NewsDetails = () => {
  return (
    <View className="w-full h-screen bg-white p-[11px]">
      <Title title="Title News" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full h-[250px] ">
          <Image
            resizeMode="contain"
            className="w-full h-full"
            source={require('../../../assets/thumb.jpg')}
          />
        </View>

        <Text className=" font-semibold text-base text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          consectetur adipisci velit cum quia veniam sequi neque aliquam nulla
          dolor, omnis autem sapiente aliquid quod eos deleniti, odit deserunt
          aperiam delectus a. Expedita consequatur sed esse accusamus voluptates
          incidunt atque, quidem, ab in, eligendi reiciendis culpa aliquid ea
          sit nam voluptatibus quia facere animi ut nisi! Repellendus,
          blanditiis exercitationem corrupti ullam ipsa quod doloribus non hic
          consectetur alias nulla est laboriosam? Eaque, saepe est quibusdam
          cumque nam illum at tempore mollitia libero recusandae exercitationem
          explicabo laudantium ipsum sequi eligendi earum quo possimus facilis
          quia assumenda, inventore architecto neque? Dolore cupiditate mollitia
          a natus enim, tenetur perspiciatis illum quaerat placeat magni eveniet
          adipisci fugiat quisquam voluptatibus architecto laboriosam, minima
          consectetur rerum similique exercitationem. Ipsam nisi distinctio
          repudiandae obcaecati officiis sunt numquam pariatur error! Assumenda
          labore at, facilis perferendis sapiente officiis consequuntur velit,
          possimus magnam magni, consequatur necessitatibus illum nobis? Ad,
          molestiae quasi! Dolor consequuntur natus eum eius rem, vitae aperiam
          similique odio minima ab, eligendi suscipit commodi velit quam
          exercitationem hic at nulla minus ducimus explicabo? Qui aliquam ea,
          sapiente explicabo optio, eum atque nesciunt ex molestias dicta, sed
          doloremque ab facere minus quas alias quod deleniti distinctio
          tenetur. Iusto ullam dolore totam ipsam non officia, velit enim
          asperiores, earum, esse magnam provident! Iure eligendi ullam neque
          veritatis fugit. Aspernatur minus inventore non sit eligendi rem animi
          ea nostrum asperiores nobis quidem tempora laborum quas error porro
          recusandae vitae, dolorem veritatis a fuga ullam perferendis autem
          temporibus? Sint soluta doloribus rerum dicta libero? Perferendis
          odit, blanditiis nulla omnis earum minima similique, pariatur ab
          recusandae nam, sapiente tempore! Aliquam doloribus vitae ipsa fugiat,
          quidem qui sit at quam minima eius aspernatur accusamus quibusdam
          harum eveniet, obcaecati libero error magni enim dolorum impedit
          quaerat. Blanditiis provident fugiat quas rem non dignissimos in nemo
          quis corporis ipsum odio, deleniti tempora voluptatibus placeat, velit
          qui maxime fugit asperiores, debitis consequatur porro voluptatum
          consequuntur. Nulla aut magni minima aliquam aspernatur distinctio
          adipisci cumque nam aperiam quidem quos animi temporibus perferendis
          natus iure, ratione quae esse quibusdam. Quis blanditiis veniam
          sapiente molestias cupiditate quaerat commodi dolore dicta recusandae
          laboriosam magni numquam accusamus quia sequi hic, qui aliquam quam
          facere assumenda earum est amet? Cum earum, temporibus commodi quasi
          quisquam, molestiae unde pariatur suscipit praesentium voluptatem
          similique corporis assumenda fugiat atque ad provident odit recusandae
          ab magni architecto adipisci repudiandae necessitatibus? Dicta minus
          error culpa quis delectus deserunt dolorem! Suscipit libero deleniti
          facilis praesentium illum blanditiis expedita velit neque enim eaque
          dolor, tempore eveniet obcaecati nam id, officia mollitia? Ducimus
          tempore saepe iste tenetur, voluptates, similique ratione libero
          adipisci ullam distinctio totam cum blanditiis incidunt ea aliquid
          dolorem, commodi eum quam. Atque, beatae harum sed cumque laboriosam
          necessitatibus voluptatem rerum distinctio placeat. Officia, sequi.
          Dignissimos inventore odio rerum rem quasi nam blanditiis consequuntur
          praesentium soluta architecto? Cumque dolor, placeat, eveniet quo quas
          ea unde, deserunt obcaecati necessitatibus laudantium eum. Minus
          pariatur necessitatibus quae vitae placeat praesentium, in tempore,
          eum soluta totam temporibus fuga. Ad unde tenetur error sit.
        </Text>
      </ScrollView>
    </View>
  );
};

export default NewsDetails;
