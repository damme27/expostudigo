import {
    AspectRatio,
    Avatar,
    Box,
    Button,
    Center,
    HStack,
    Heading,
    Image,
    NativeBaseProvider,
    ScrollView,
    Stack,
    Text,
    VStack
} from "native-base";
import React, { Component } from 'react'

export class Glossary extends Component {
    render() {
        return (
            <NativeBaseProvider>
                <ScrollView mt={5}>
                    <Center>
                    <Heading>E</Heading>
                    <Box shadow={2}
                         rounded="md" width="85%" my={4} p={4} bg="white">
                         <Heading mb={4}>
                            EPA (Epson Print Admin)
                        </Heading>
                        <Text fontSize="sm">
                        Solusi berbasis server yang menciptakan lingkungan print, scan dan copy dengan aman melalui otentikasi pengguna. Dapat memudahkan dalam perkiraan biaya dan alat administrasi yang membantu meningkatkan keamanan, kenyamanan, produktivitas, dan penghematan biaya.
                        </Text>
                    </Box>
                    <Box shadow={2}
                         rounded="md" width="85%" my={4} p={4} bg="white">
                         <Heading mb={4}>
                         EDA (Epson Device Admin)
                        </Heading>
                        <Text fontSize="sm">
                            Untuk mengonfigurasi, memantau, memelihara unit dari jarak jauh. Sangat membantu untuk team IT yang bekerja pada ruangan/lantai berbeda dengan printer karena tidak perlu mengecek secara manual dan mendatangi unit satu persatu
                        </Text>
                    </Box>
                    <Heading>P</Heading>
                    <Box shadow={2}
                         rounded="md" width="85%" my={4} p={4} bg="white">
                         <Heading mb={4}>
                            Power Cleaning
                        </Heading>
                        <Text fontSize="sm">
                            Pembersihan lanjutan yang dilakukan jika hasil cetak tidak maksimal setelah dilakukan head cleaning sebanyak 3x. Terjadi apabila printer jarang  (sekala berat)
                        </Text>
                    </Box>
                    <Box shadow={2}
                         rounded="md" width="85%" my={4} p={4} bg="white">
                         <Heading mb={4}>
                         PPM (Page Per Minute)
                        </Heading>
                        <Text fontSize="sm">
                        Satuan yang digunakan untuk mengetahui kecepatan cetak halaman/draft per menit
                        </Text>
                    </Box>
                    <Box shadow={2}
                         rounded="md" width="85%" my={4} p={4} bg="white">
                         <Heading mb={4}>
                         Printer sharing
                        </Heading>
                        <Text fontSize="sm">
                        Menghubungkan beberapa PC ke suatu printer sehingga dapat digunakan secara bersamaan.
                        </Text>
                    </Box>
                    </Center>
                </ScrollView>
            </NativeBaseProvider>
        )
    }
}

export default Glossary
