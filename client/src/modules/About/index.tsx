import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AnchorIcon from '@mui/icons-material/Anchor';
import AndroidIcon from '@mui/icons-material/Android';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import AttractionsIcon from '@mui/icons-material/Attractions';
import BalanceIcon from '@mui/icons-material/Balance';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BugReportIcon from '@mui/icons-material/BugReport';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Chip, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import React, { useMemo } from 'react';
import JavascriptIcon from '@mui/icons-material/Javascript';
import SchoolIcon from '@mui/icons-material/School';
import DataObjectIcon from '@mui/icons-material/DataObject';
export default function About() {
  const chipStyle = useMemo(() => ({ bgcolor: 'transparent', color: 'rgb(107, 114, 128)' }), []);
  return (
    <div className="w-full rounded bg-white p-4 space-y-4">
      <div className="space-y-2">
        <h1 className="space-x-2 flex items-center">
          <BalanceIcon />
          <span className="text-lg">介绍</span>
        </h1>
        <ul className="space-y-2 pl-4">
          <li>本项目为 自己 的前端联系项目，以提升自己的能力为目标</li>
          <li>
            <JavascriptIcon /> 项目所涉及的技术栈 前端部分：
            <ul className="space-y-2 pl-4">
              <li className="flex">
                <span className="mr-2 w-28">
                  <AssistantPhotoIcon /> react
                </span>
                <span className="text-gray-500 flex-1">
                  @18.1.0 版本 喜欢react ,主要是因为其jsx模板语法，几乎完全使用js来编写代码，更纯粹
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 w-28">
                  <AttractionsIcon /> TS
                </span>
                <span className="text-gray-500 flex-1">
                  使用 Typescript
                  主要是因为，其强大的类型推断，能为前端开发提供更大的开发效率；支持ES6以上的所有新特性;拥有类型检查，提升前端编码的健壮性
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 w-28">
                  <AnchorIcon /> css
                </span>
                <span className="text-gray-500 flex-1">
                  部分使用的 tailwind css 使用该工具主要为了保持前端页面样式风格统一规范
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 w-28">
                  <AndroidIcon /> ui 组件库
                </span>
                <span className="text-gray-500 flex-1">使用的是 MUI ，初见其ui风格很是喜欢，就拿来用用</span>
              </li>
            </ul>
          </li>
          <li>
            <DataObjectIcon /> 项目所涉及的技术栈 后端部分：
            <ul className="space-y-2 pl-4">
              <li className="flex">
                <span className="mr-2 w-28">
                  <BeachAccessIcon /> express
                </span>
                <span className="text-gray-500 flex-1">框架</span>
              </li>
              <li className="flex">
                <span className="mr-2 w-28">
                  <BugReportIcon /> nodejs
                </span>
                <span className="text-gray-500 flex-1">完成接口的编写</span>
              </li>
              <li className="flex">
                <span className="mr-2 w-28">
                  <CatchingPokemonIcon /> mySql
                </span>
                <span className="text-gray-500 flex-1">数据库</span>
              </li>
              <li className="flex">
                <span className="mr-2 w-28">
                  <EngineeringIcon /> sequelize
                </span>
                <span className="text-gray-500 flex-1">作为操作数据库的工具，减少了许多编写sql语句的地方</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h1 className="space-x-2 flex items-center">
          <AddToQueueIcon />
          <span className="text-lg">技能</span>
        </h1>
        <ul className="space-y-2 pl-4">
          <li className="flex">
            <span className="mr-2 w-28">
              <CheckBoxIcon /> 语言
            </span>
            <span className="text-gray-500 flex-1 flex items-center space-x-2">
              <Chip label="HTML" icon={<BatteryChargingFullIcon />} sx={chipStyle} />
              <Chip label="CSS" icon={<BatteryChargingFullIcon />} sx={chipStyle} />
              <Chip label="JavaScript" icon={<BatteryChargingFullIcon />} sx={chipStyle} />
              <Chip label="TypeScript" icon={<BatteryCharging90Icon />} sx={chipStyle} />
              <Chip label="NodeJs" icon={<BatteryCharging60Icon />} sx={chipStyle} />
            </span>
          </li>
          <li className="flex">
            <span className="mr-2 w-28">
              <CheckBoxIcon /> 框架
            </span>
            <span className="text-gray-500 flex-1 flex items-center space-x-2">
              <Chip label="React" icon={<BatteryCharging90Icon />} sx={chipStyle} />
              <Chip label="Vue" icon={<BatteryCharging90Icon />} sx={chipStyle} />
              <Chip label="Express/Koa" icon={<BatteryCharging20Icon />} sx={chipStyle} />
            </span>
          </li>
          <li className="flex">
            <span className="mr-2 w-28">
              <CheckBoxIcon /> 其他
            </span>
            <span className="text-gray-500 flex-1 flex items-center space-x-2">
              <Chip label="GIT" icon={<BatteryChargingFullIcon />} sx={chipStyle} />
              <Chip label="Nginx" icon={<BatteryCharging20Icon />} sx={chipStyle} />
              <Chip label="MySql" icon={<BatteryCharging20Icon />} sx={chipStyle} />
            </span>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h1 className="space-x-2 flex items-center">
          <SchoolIcon />
          <span className="text-lg">知识聚集地</span>
        </h1>
        <ul className="space-y-2 pl-4">
          <li className="flex">
            <span className="mr-2 w-28 space-x-4">
              <GitHubIcon />
              <Link href="https://github.com/xly-lab" target="_blank" rel="noreferrer" color="inherit">
                github
              </Link>
            </span>
          </li>
          <li className="flex">
            <span className="mr-2 w-28 space-x-4">
              <CodeIcon />
              <Link
                color="inherit"
                href="https://blog.csdn.net/weixin_43480867?type=blog"
                target="_blank"
                rel="noreferrer"
              >
                CSDN
              </Link>
            </span>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h1 className="space-x-2 flex items-center">
          <SchoolIcon />
          <span className="text-lg">免责声明</span>
        </h1>
        <ul className="space-y-2 pl-4">
          <li className="flex">
            <span className="text-gray-500 flex-1">
              1. 本站提供的所有内容仅供学习、交流和分享用途，只供参考、转载请保留署名以及原文链接，谢谢
            </span>
          </li>
          <li className="flex">
            <span className="text-gray-500 flex-1">
              2. 本站部分资源或者图片源于网络，仅供学习和研究使用。如有侵犯您的版权请 留言或者联系 联系我 删除内容
            </span>
          </li>
          <li className="flex">
            <span className="text-gray-500 flex-1">
              3.关于本站的所有留言评论与转载、引用文纯属文字原作者个人观点，与本站观点及立场无关；浏览者在本站发表信息时需要遵守中国现行相应法律，不得发布违法信息
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
