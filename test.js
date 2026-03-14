/**
 * @name LX_API_TEST
 * @description 测试洛雪音乐自定义源的API是否完整、且可以正常工作
 * @version 1.0.0
 * @author Ceale
 * @aabbcc 0000
 */

const { EVENT_NAMES, on, send, request, utils, version, env, currentScriptInfo } = globalThis.lx
const log = console.log

log("正在发送 inited 事件...")
send(EVENT_NAMES.inited, {
    openDevTools: true,
    sources: {}
})

console.log("正在发送 inited 事件...")
on(EVENT_NAMES.request, ({ source, action, info }) => {
    log(source, action, info)
})

log("LX_API_TEST")

log(utils.buffer.from("str", "utf8"))
log(utils.buffer.bufToString("str", "utf8"))
log(utils.buffer.bufToString({ valueOf: () => "114" }, "utf8"))
log(utils.buffer.bufToString(utils.buffer.from("str", "utf8"), "utf8"))

request("baidu.com", { body: {} }, (err, res, body) => {
    log(err, res, body)
})

log(currentScriptInfo)

// import "https://esm.sh/console-log-hello-world"
// await import("https://esm.sh/console-log-hello-world")
// import("data:text/javascript,console.log('111')")

// eval("console.log('hello world')")