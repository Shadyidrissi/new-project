import { list } from 'postcss';
import Form from '../function/Form'

const serviceData = [
  {
    languages:[
      (<svg width="100" height="100" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 256 256" fill="currentColor" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00D8FF" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656c0-10.303-8.352-18.656-18.656-18.656c-10.303 0-18.656 8.353-18.656 18.656c0 10.303 8.353 18.656 18.656 18.656Z"/><path stroke="#00D8FF" stroke-width="8.911" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812h.004Z" clip-rule="evenodd"/><path stroke="#00D8FF" stroke-width="8.911" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723h.004Z" clip-rule="evenodd"/><path stroke="#00D8FF" stroke-width="8.911" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clip-rule="evenodd"/></g></g></svg></svg>),
      (<svg width="100" height="100" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 256 256" fill="currentColor" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.652 3.652 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89121.985 89121.985 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565c0-7.448-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254Zm40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392Z"/></g></g></svg></svg>),
      (<svg width="100" height="100" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 128 128" fill="currentColor" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="#94795D" fill-rule="evenodd" d="M87.259 100.139c.169-.325.331-.612.469-.909c.087-.19.221-.228.41-.223c1.133.032 2.266.067 3.4.078c.963.01 1.928-.008 2.892-.019c1.086-.013 2.172-.07 3.257-.039c1.445.042 2.853.325 4.16.968c1.561.769 2.742 1.94 3.547 3.483a8.71 8.71 0 0 1 .931 3.14c.172 1.608.059 3.179-.451 4.717c-.632 1.906-1.832 3.365-3.499 4.458c-1.283.841-2.69 1.338-4.198 1.622c-1.596.301-3.197.204-4.798.209c-1.756.007-3.511-.031-5.267-.051c-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652a2.83 2.83 0 0 0 1.087-.413c.184-.122.26-.44.332-.685c.062-.214.065-.449.067-.675c.025-3.425.051-6.849.065-10.272a44.077 44.077 0 0 0-.065-2.596c-.034-.605-.357-1.019-1.077-1.162c-.56-.111-1.124-.197-1.687-.296l-.189-.059zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042c-.292-1.613-.998-3.018-2.238-4.119c-2.005-1.779-4.419-2.053-6.949-1.841c-.576.048-.7.245-.709.837c-.014.84-.028 1.68-.029 2.52c-.004 2.664-.004 5.328 0 7.992c.001.758.009 1.516.031 2.272c.024.774.305 1.429 1.063 1.729c1.195.473 2.452.529 3.706.336c2.003-.307 3.404-1.474 4.344-3.223c.744-1.388.954-2.903 1.016-4.461zm4.869 9.071c-.024-.415.146-.758.356-1.073c.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755c.038-.262.074-.527.077-.792a879.6 879.6 0 0 0 .059-6.291c.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269c.112-.271.219-.552.377-.796c.059-.09.258-.125.392-.122c.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759c1.149.612 1.792 1.559 1.976 2.849c.192 1.355-.219 2.497-1.209 3.404c-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466c1.188.487 2.133 1.248 2.633 2.463c.395.959.395 1.959.161 2.953c-.364 1.556-1.389 2.591-2.722 3.374c-1.251.735-2.605 1.163-4.047 1.235c-1.33.067-2.666.042-3.999.057l-.772.004a996.106 996.106 0 0 1-3.854-.096l-.117-.032zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974c.008.426-.007.864.085 1.274c.138.613.418 1.166 1.106 1.342a6.671 6.671 0 0 0 2.818.124c1.177-.205 2.116-.795 2.631-1.916c.382-.833.439-1.716.308-2.618c-.174-1.188-.805-2.05-1.854-2.615c-.688-.371-1.422-.598-2.204-.628c-.876-.033-1.753-.035-2.629-.062c-.246-.007-.28.118-.279.32c.005.934.002 1.869.002 2.805zm1.865-4.475c.479-.024 1.021-.031 1.56-.085c1.032-.103 1.759-.622 2.138-1.609c.193-.501.185-1.017.19-1.538c.015-1.357-.777-2.469-2.066-2.929c-.995-.355-2.021-.361-3.053-.333c-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319l1.601.071z" clip-rule="evenodd"/><path fill="#50382B" fill-rule="evenodd" d="m10.543 116.448l-.073.944c-.68 0-1.307-.005-1.934.002c-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07c-.05-.281-.034-.576-.021-.867c.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988c.031-.667.062-1.335.065-2.002c.009-1.642-.001-3.282.006-4.924c.001-.384-.132-.67-.49-.826a43.787 43.787 0 0 0-1.285-.546c-.204-.082-.469-.127-.445-.401c.024-.279.281-.352.523-.407c1.002-.229 2.005-.452 3.004-.696c.322-.079.63-.212 1.015-.346c.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307c.048.037.209-.03.289-.092c.854-.65 1.758-1.211 2.789-1.538c1.597-.507 2.968-.037 3.928 1.34c.338.485.339.485.808.146c.805-.585 1.647-1.101 2.589-1.441c2.068-.747 4.055.201 4.774 2.284c.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822c.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001c-1.344.012-2.688.019-4.031.05c-.234.006-.295-.052-.307-.271c-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028c.015-1.878.054-3.761-.041-5.635c-.099-1.944-1.642-2.979-3.526-2.481a5.194 5.194 0 0 0-1.69.814c-.175.125-.208.269-.194.488c.053.828.086 1.657.093 2.486c.012 1.451-.006 2.902 0 4.354c.002.588.203.813.784.949l.863.199l.16.036c.012.276.023.552.01.828c-.008.173-.142.188-.292.185c-.839-.021-1.679-.049-2.518-.047c-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852c.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758c.114-2.01.196-4.021.007-6.03a3.695 3.695 0 0 0-.326-1.145c-.515-1.138-1.674-1.613-3.011-1.271c-.635.162-1.208.453-1.75.82a.795.795 0 0 0-.378.695c0 2.005.007 4.01.013 6.014l.011.773c.012.539.241.823.776.939c.344.078.692.131 1.082.203z" clip-rule="evenodd"/><path fill="#4F382B" fill-rule="evenodd" d="M71.001 105.285c.155.754.152 1.432-.402 1.946c-.55.511-1.246.339-1.925.225c.063.358.133.662.167.97c.247 2.289-.738 3.988-2.861 4.959c-.802.366-1.653.502-2.522.572c-.432.034-.81.364-.851.719c-.042.36.184.73.636.838c.533.127 1.089.163 1.636.226c1.174.134 2.361.195 3.521.405c1.754.316 2.733 1.847 2.424 3.609c-.275 1.568-1.183 2.709-2.449 3.584c-2.133 1.478-4.473 1.91-6.965 1.156c-1.425-.432-2.43-1.369-2.777-2.885c-.174-.759.011-1.446.582-1.961c.679-.61 1.418-1.154 2.129-1.73l.23-.231l-.264-.185c-.725-.344-1.305-.815-1.53-1.633c-.077-.277.003-.459.238-.601c.4-.241.798-.486 1.193-.735c.186-.116.37-.236.543-.37c.236-.18.215-.314-.067-.418c-.656-.242-1.239-.593-1.691-1.133c-.755-.901-.969-1.974-.907-3.107c.097-1.77 1.058-2.936 2.62-3.686c1.857-.891 3.72-.947 5.613-.135c.7.3 1.438.364 2.189.312c.561-.04 1.051-.252 1.49-.711zm-6.843 12.681c-1.394-.012-1.831.16-2.649.993c-.916.934-.911 2.229.003 3.167c.694.711 1.56 1.044 2.523 1.144c1.125.116 2.233.069 3.255-.494c1.09-.603 1.632-1.723 1.387-2.851c-.203-.931-.889-1.357-1.724-1.602c-.95-.278-1.932-.331-2.795-.357zm-2.738-8.908c.051.387.072.779.158 1.158c.223.982.65 1.845 1.627 2.282c1.147.515 2.612.294 3.114-1.316a4.853 4.853 0 0 0-.113-3.274a2.512 2.512 0 0 0-.91-1.184c-.996-.695-2.793-.787-3.525.749c-.238.499-.331 1.03-.351 1.585z" clip-rule="evenodd"/><path fill="#4F372B" fill-rule="evenodd" d="M47.35 105.038c.037.171.111.365.113.56c.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636c1.942-.585 3.882.478 4.515 2.456c.24.752.335 1.525.344 2.311c.02 1.746.032 3.492.05 5.238c.006.627.078.739.671.92a7.4 7.4 0 0 0 1.03.229c.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754c-1.678-.003-3.355.007-5.033.021c-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484c.282-.042.562-.107.837-.179c.283-.073.419-.282.457-.562c.019-.142.044-.284.043-.426c-.024-1.908.007-3.818-.097-5.723c-.084-1.541-1.26-2.459-2.807-2.354a4.047 4.047 0 0 0-2.071.743c-.413.289-.496.706-.494 1.155c.008 1.784.025 3.568.044 5.353c.004.391.015.782.052 1.17c.039.424.188.595.604.687c.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819c-1.735-.007-3.47.004-5.204.023c-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064c.033-2.271.045-4.541.068-6.812c.003-.326-.12-.579-.424-.714a53.88 53.88 0 0 0-1.287-.544c-.238-.098-.51-.16-.519-.489c-.006-.232.242-.437.581-.506c.681-.138 1.368-.253 2.041-.422c.67-.167 1.328-.391 2.062-.611z" clip-rule="evenodd"/><path fill="#4F382B" fill-rule="evenodd" d="M84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123c-1.9 1.633-4.864 2.188-7.287.967c-1.034-.521-1.794-1.32-2.289-2.357c-.759-1.595-.949-3.272-.553-4.99c.392-1.699 1.421-2.93 2.961-3.727c1.584-.819 3.252-1.139 5.011-.709c2.225.543 3.824 2.357 4.142 4.667c.057.405.079.815.098 1.026zm-2.577 1.149l-.086-.01c0-.2.011-.4-.002-.6c-.073-1.246-.353-2.433-1.075-3.476c-.685-.988-1.618-1.571-2.832-1.656c-1.359-.096-2.501.664-2.902 2.052c-.602 2.084-.398 4.115.66 6.024c.461.832 1.144 1.446 2.059 1.769c1.793.631 3.383-.186 3.85-2.022c.172-.678.222-1.387.328-2.081z" clip-rule="evenodd"/><path fill="#4F372B" fill-rule="evenodd" d="M40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152c-1.007 1.31-2.391 2.01-3.965 2.305c-1.861.348-3.609.032-5.104-1.217c-.71-.594-1.195-1.355-1.515-2.221c-.525-1.42-.656-2.875-.333-4.358c.345-1.587 1.241-2.8 2.63-3.614c1.606-.939 3.339-1.358 5.19-.936c2.38.544 3.754 2.095 4.262 4.443c.102.474.116.964.171 1.446zm-2.606 1.004l-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886c-.617-.861-1.443-1.401-2.502-1.552c-1.726-.246-2.854.778-3.228 2.169c-.488 1.817-.335 3.612.42 5.335c.471 1.074 1.215 1.911 2.358 2.317c1.782.633 3.396-.205 3.847-2.034c.166-.669.216-1.367.319-2.053z" clip-rule="evenodd"/><path fill="#439934" fill-rule="evenodd" d="M82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92c.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009c-2.543.4-5.083.814-7.624 1.226c-2.627.426-5.256.835-7.878 1.289c-.929.16-2.079-.031-2.454 1.253l-.18.061l.127-7.678l-.129-18.526l1.224-.21c2.001-.327 4.002-.66 6.006-.979c2.39-.379 4.782-.749 7.174-1.119c1.056-.162 2.113-.313 3.169-.471z" clip-rule="evenodd"/><path fill="#45A538" fill-rule="evenodd" d="M62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339c-6.658-6.28-11.529-13.673-13.928-22.586c-.661-2.452-1.101-4.945-1.243-7.479c-.1-1.774-.243-3.563-.117-5.328c.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537c1.344 3.956 2.677 7.916 4.004 11.879c4.169 12.451 8.333 24.905 12.509 37.354c.082.243.293.442.445.661l-.664 2.268z" clip-rule="evenodd"/><path fill="#46A037" fill-rule="evenodd" d="M82.362 33.544c-1.057.157-2.114.309-3.169.471c-2.392.37-4.784.74-7.174 1.119c-2.003.318-4.004.651-6.006.979l-1.224.21l-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856a198.423 198.423 0 0 0-.141-4.88c-.04-.873-.181-1.742-.237-2.615c-.033-.502.011-1.008.022-1.512c.624 1.209 1.235 2.427 1.876 3.627c1.013 1.897 2.628 3.295 4.083 4.82c5.746 6.031 9.825 13.039 12.368 20.957z" clip-rule="evenodd"/><path fill="#409433" fill-rule="evenodd" d="m64.792 62.527l.18-.061c.375-1.284 1.525-1.093 2.454-1.253c2.622-.454 5.251-.863 7.878-1.289c2.541-.411 5.081-.825 7.624-1.226c.301-.047.615-.008.923-.009c-.475 1.696-.849 3.429-1.452 5.078c-.685 1.87-1.513 3.696-2.392 5.486a37.595 37.595 0 0 1-4.853 7.458c-1.466 1.762-3.1 3.393-4.737 5.002c-.906.889-1.972 1.614-2.966 2.414l-.258-.176l-.927-.792l-.959-2.104a31.65 31.65 0 0 1-1.065-7.516l.018-.428l.131-1.854c.043-.633.101-1.265.128-1.898c.096-2.276.182-4.554.273-6.832z" clip-rule="evenodd"/><path fill="#4FAA41" fill-rule="evenodd" d="M64.792 62.527c-.09 2.278-.176 4.557-.273 6.835c-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392c-2.101-6.271-4.176-12.551-6.274-18.824a3423.013 3423.013 0 0 0-5.118-15.176c-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672c1.73 5.12 3.457 10.241 5.169 15.367c2.228 6.67 4.441 13.343 6.667 20.014c.089.266.235.512.375.811l.512-.596l-.127 7.678z" clip-rule="evenodd"/><path fill="#4AA73C" fill-rule="evenodd" d="M48.076 25.458c.161.209.391.395.471.631a3379.774 3379.774 0 0 1 5.118 15.176c2.098 6.273 4.173 12.553 6.274 18.824c1.27 3.79 2.569 7.57 3.867 11.392l.584-.221l-.131 1.854l-.119.427c-.203 2.029-.374 4.062-.622 6.087c-.124 1.015-.389 2.011-.59 3.015c-.151-.219-.363-.418-.445-.661c-4.177-12.449-8.34-24.903-12.509-37.354a3010.791 3010.791 0 0 0-4.004-11.879c-.068-.201-.26-.359-.394-.537l2.5-6.754z" clip-rule="evenodd"/><path fill="#57AE47" fill-rule="evenodd" d="m64.918 54.849l-.512.596c-.14-.299-.286-.545-.375-.811c-2.226-6.671-4.439-13.344-6.667-20.014a4618.057 4618.057 0 0 0-5.169-15.367c-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586c1.284 3.76 2.556 7.523 3.822 11.289c1.182 3.518 2.346 7.04 3.542 10.552c.08.235.359.401.545.601l.01.798l.129 18.526z" clip-rule="evenodd"/><path fill="#60B24F" fill-rule="evenodd" d="M64.779 35.525c-.187-.199-.465-.365-.545-.601c-1.195-3.512-2.36-7.034-3.542-10.552a2495.581 2495.581 0 0 0-3.822-11.289c-.075-.219-.283-.392-.429-.586c1.504-1.473 2.961-2.999 4.526-4.404c1.391-1.248 2.509-2.586 2.561-4.559l.11-.393l.396.998c-.01.504-.055 1.01-.022 1.512c.057.873.198 1.742.237 2.615c.073 1.625.108 3.253.141 4.88c.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969z" clip-rule="evenodd"/><path fill="#A9AA88" fill-rule="evenodd" d="M62.929 82.642c.201-1.004.466-2 .59-3.015c.248-2.024.419-4.058.622-6.087l.051-.008l.05.009a31.65 31.65 0 0 0 1.065 7.516c-.135.178-.324.335-.396.535c-.555 1.566-1.079 3.145-1.637 4.71c-.076.214-.29.381-.439.568l-.571-1.96l.665-2.268z" clip-rule="evenodd"/><path fill="#B6B598" fill-rule="evenodd" d="M62.835 86.871c.149-.188.363-.354.439-.568c.558-1.565 1.082-3.144 1.637-4.71c.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552l-.532-3.045z" clip-rule="evenodd"/><path fill="#C2C1A7" fill-rule="evenodd" d="M63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477c-.641 1.836-1.252 3.682-1.898 5.517c-.082.232-.309.415-.468.621l-.255-3.177z" clip-rule="evenodd"/><path fill="#CECDB7" fill-rule="evenodd" d="M63.621 93.091c.16-.206.387-.389.468-.621c.646-1.835 1.258-3.681 1.898-5.517c.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716c-.121-.158-.337-.311-.347-.475c-.038-.642-.011-1.289-.008-1.934z" clip-rule="evenodd"/><path fill="#DBDAC7" fill-rule="evenodd" d="M63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78l-.931 2.387l-1.078-.379z" clip-rule="evenodd"/><path fill="#EBE9DC" fill-rule="evenodd" d="m65.055 95.88l.931-2.387l.192 2.824l-1.123-.437z" clip-rule="evenodd"/><path fill="#CECDB7" fill-rule="evenodd" d="M66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176l-.805 1.426z" clip-rule="evenodd"/><path fill="#4FAA41" fill-rule="evenodd" d="m64.242 73.542l-.05-.009l-.051.008l.119-.427l-.018.428z" clip-rule="evenodd"/></g></svg></svg>),
      (<svg width="100" height="100" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 256 256" fill="currentColor" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#skillIconsTailwindcssDark0)" fill-rule="evenodd" d="M83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110Zm-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5Z" clip-rule="evenodd"/><defs><linearGradient id="skillIconsTailwindcssDark0" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stop-color="#32B1C1"/><stop offset="1" stop-color="#14C6B7"/></linearGradient></defs></g></g></svg></svg>),
      (<svg width="100" height="100" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 256 256" fill="currentColor" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#81CD39" d="M119.878 31.116c4.919-2.815 11.325-2.828 16.239 0c24.722 13.97 49.452 27.917 74.17 41.895c4.65 2.619 7.759 7.793 7.712 13.15v84.045c.035 5.579-3.382 10.877-8.287 13.436c-24.641 13.893-49.27 27.802-73.907 41.695c-5.019 2.87-11.554 2.649-16.418-.457c-7.387-4.282-14.787-8.544-22.175-12.822c-1.51-.9-3.212-1.616-4.278-3.08c.943-1.27 2.628-1.428 3.997-1.983c3.083-.981 5.916-2.555 8.748-4.082c.717-.49 1.591-.302 2.278.136c6.317 3.622 12.579 7.35 18.917 10.937c1.352.781 2.721-.256 3.877-.9c24.18-13.667 48.39-27.281 72.567-40.952c.896-.431 1.391-1.382 1.318-2.363c.017-27.725.004-55.454.009-83.18c.102-1.112-.542-2.136-1.549-2.592c-24.555-13.829-49.099-27.678-73.65-41.51a2.557 2.557 0 0 0-2.892-.005c-24.552 13.837-49.09 27.7-73.642 41.527c-1.003.457-1.676 1.464-1.557 2.58c.005 27.726 0 55.455 0 83.184a2.352 2.352 0 0 0 1.336 2.334c6.551 3.715 13.111 7.404 19.667 11.107c3.694 1.987 8.228 3.169 12.297 1.646c3.591-1.288 6.108-4.953 6.04-8.765c.034-27.563-.017-55.13.025-82.69c-.09-1.223 1.071-2.234 2.261-2.118c3.148-.022 6.3-.043 9.448.008c1.314-.03 2.218 1.288 2.056 2.52c-.013 27.738.034 55.476-.021 83.213c.008 7.393-3.029 15.437-9.867 19.054c-8.423 4.363-18.835 3.438-27.157-.746c-7.204-3.596-14.08-7.84-21.156-11.692c-4.918-2.545-8.318-7.864-8.283-13.439V86.161c-.052-5.468 3.181-10.736 7.975-13.317c24.637-13.903 49.27-27.818 73.902-41.728Z"/><path fill="#81CD39" d="M141.372 89.335c10.745-.692 22.248-.41 31.917 4.884c7.487 4.056 11.637 12.57 11.769 20.887c-.209 1.121-1.382 1.74-2.453 1.663c-3.117-.004-6.236.043-9.353-.021c-1.323.051-2.091-1.168-2.257-2.337c-.896-3.98-3.067-7.921-6.812-9.841c-5.75-2.878-12.416-2.733-18.686-2.673c-4.577.242-9.499.639-13.377 3.33c-2.977 2.039-3.881 6.155-2.819 9.47c1.002 2.38 3.749 3.148 5.998 3.856c12.949 3.387 26.671 3.049 39.373 7.506c5.259 1.817 10.403 5.35 12.203 10.856c2.355 7.38 1.323 16.2-3.928 22.124c-4.258 4.875-10.459 7.529-16.644 8.97c-8.228 1.835-16.767 1.882-25.123 1.067c-7.857-.896-16.034-2.96-22.099-8.313c-5.187-4.504-7.72-11.522-7.469-18.294c.06-1.144 1.199-1.942 2.295-1.848c3.139-.025 6.279-.034 9.418.005c1.255-.09 2.184.994 2.249 2.176c.578 3.791 2.003 7.771 5.31 10.018c6.38 4.117 14.387 3.835 21.693 3.95c6.053-.268 12.848-.349 17.787-4.35c2.606-2.282 3.378-6.1 2.674-9.384c-.763-2.773-3.664-4.065-6.155-4.91c-12.783-4.043-26.659-2.576-39.318-7.149c-5.14-1.816-10.11-5.25-12.084-10.53c-2.755-7.473-1.493-16.717 4.308-22.44c5.656-5.695 13.82-7.888 21.583-8.672"/></g></g></svg></svg>),
    ],
    form: (
         <Form f='Function Web' list={['Hosting','Domain Name','Dashbord']} price={['Less-10$','50$-100$','100$-More']}/>
    ),
    url: "",
    title: "build Full satck web",
    description:
      "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essedummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full"
      >
        <rect
          width="512"
          height="512"
          x="0"
          y="0"
          rx="30"
          fill="transparent"
          stroke="transparent"
          stroke-width="0"
          stroke-opacity="100%"
          paint-order="stroke"
        ></rect>
        <svg
          width="256px"
          height="256px"
          viewBox="0 0 14 14"
          fill="currentColor"
          x="128"
          y="128"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3.5 13.5h-2a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-2m-10-10h13M7 13.5V7" />
              <path d="M4.5 9.5L7 7l2.5 2.5" />
            </g>
          </g>
        </svg>
      </svg>
    ),
  },
  {
    form: "",
    url: "",
    title: "buildAPI",
    description: "",
    icon: (
      <svg width="70" height="70" viewBox="0 0 512 512" class="h-full w-full">
        <rect
          width="512"
          height="512"
          x="0"
          y="0"
          rx="30"
          fill="transparent"
          stroke="transparent"
          stroke-width="0"
          stroke-opacity="100%"
          paint-order="stroke"
        ></rect>
        <svg
          width="256px"
          height="256px"
          viewBox="0 0 32 32"
          fill="currentColor"
          x="128"
          y="128"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path
              fill="currentColor"
              d="M26 22a3.86 3.86 0 0 0-2 .57l-3.09-3.1a6 6 0 0 0 0-6.94L24 9.43a3.86 3.86 0 0 0 2 .57a4 4 0 1 0-4-4a3.86 3.86 0 0 0 .57 2l-3.1 3.09a6 6 0 0 0-6.94 0L9.43 8A3.86 3.86 0 0 0 10 6a4 4 0 1 0-4 4a3.86 3.86 0 0 0 2-.57l3.09 3.1a6 6 0 0 0 0 6.94L8 22.57A3.86 3.86 0 0 0 6 22a4 4 0 1 0 4 4a3.86 3.86 0 0 0-.57-2l3.1-3.09a6 6 0 0 0 6.94 0l3.1 3.09a3.86 3.86 0 0 0-.57 2a4 4 0 1 0 4-4Zm0-18a2 2 0 1 1-2 2a2 2 0 0 1 2-2ZM4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2Zm2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm10-8a4 4 0 1 1 4-4a4 4 0 0 1-4 4Zm10 8a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
            />
          </g>
        </svg>
      </svg>
    ),
  },
  {
    form: "",
    url: "",
    title: "design UI UX",
    description: "",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full"
      >
        <rect
          width="512"
          height="512"
          x="0"
          y="0"
          rx="30"
          fill="transparent"
          stroke="transparent"
          stroke-width="0"
          stroke-opacity="100%"
          paint-order="stroke"
        ></rect>
        <svg
          width="256px"
          height="256px"
          viewBox="0 0 36 36"
          fill="currentColor"
          x="128"
          y="128"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path
              fill="currentColor"
              d="M9 17.41V27h9.59l-2-2H11v-5.59l-2-2z"
              class="clr-i-outline clr-i-outline-path-1"
            />
            <path
              fill="currentColor"
              d="M34.87 32.29L32 29.38V32H4v-4.15h2v-1.6H4V19.6h2V18H4v-6.4h2V10H4V4.41l15.94 15.85v-2.82L3.71 1.29A1 1 0 0 0 2 2v31a1 1 0 0 0 1 1h31.16a1 1 0 0 0 .71-1.71Z"
              class="clr-i-outline clr-i-outline-path-2"
            />
            <path
              fill="currentColor"
              d="M24 30h4a2 2 0 0 0 2-2V8.7l-2.3-4.23a2 2 0 0 0-1.76-1a2 2 0 0 0-1.76 1.08L22 8.72V28a2 2 0 0 0 2 2Zm0-20.8l1.94-3.77L28 9.21V24h-4Zm0 16.43h4v2.44h-4Z"
              class="clr-i-outline clr-i-outline-path-3"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </g>
        </svg>
      </svg>
    ),
  },
  {
    form: "",
    url: "",
    title: "design bussness card",
    description: "",
    icon: (
      <svg
        width="70"
        height="70"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full"
      >
        <rect
          width="512"
          height="512"
          x="0"
          y="0"
          rx="30"
          fill="transparent"
          stroke="transparent"
          stroke-width="0"
          stroke-opacity="100%"
          paint-order="stroke"
        ></rect>
        <svg
          width="256px"
          height="256px"
          viewBox="0 0 24 24"
          fill="currentColor"
          x="128"
          y="128"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M22 11.429V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1.5m17-5.071V10a2 2 0 0 0-2-2h-1m3 3.429h-3" />
              <path d="M19 8v6.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2V8Zm0 0H5.5" />
            </g>
          </g>
        </svg>
      </svg>
    ),
  },
];
export default serviceData;
