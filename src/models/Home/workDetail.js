/*
* @Author: chengbs
* @Date:   2018-06-05 22:36:36
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-06 01:05:59
*/
import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { Header, Content } from 'Components'
import * as urls from 'Contants/urls'
import history from 'Util/history'
import style from './workDetail.css'
import NewIcon from 'Components/NewIcon'

class WorkDetail extends Component {
  render() {
    return (
      <div className='pageBox'>
        <Header
          leftClick1={() => {
            history.push(urls.HOME)
          }}
          title='工作详情'
          leftIcon='icon-back'
          leftTitle1='返回'
        />
        <Content>
          <div className={style['work-detail-content']}>
            <div className={style['title']}>工单编号：20180401001</div>
            <div className={style['usr-info']}>
              <dl>
                <dt><img src='http://cimage1.tianjimedia.com/uploadImages/thirdImages/2017/162/D053720DJ162.jpg' /></dt>
                <dd className={style['usr-tel']}>1888868****</dd>
                <dd className={style['push-time']}>发布于2018-03-18 15:05</dd>
              </dl>
              <div className={style['work-info']} style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。包住宿，有老师傅带，收入稳定。包住宿，有老师傅带，收入稳定。
              </div>
              <div className={style['work-price']}>
                <div className={`${style['work-price-l']}`}>
                  <p>15,000元 - 20,000元</p>
                  <div className={style['icon-btm']}>
                    <NewIcon type='icon-budget' className={style['icon']} />
                    预算
                  </div>
                </div>
                <div className={`${style['work-price-m']} my-right-border`}></div>
                <div className={style['work-price-r']}>
                  <p>90天</p>
                  <div className={style['icon-btm']}>
                    <NewIcon type='icon-constructionPeriod' className={style['icon']} />
                    工期
                  </div>
                </div>
              </div>
            </div>
            <div className={style['work-detail-list']}>
              <dl>
                <dt>具体需求</dt>
                <dd>项目名称：江西景德镇一期</dd>
                <dd>工种：木工</dd>
                <dd>班组：木工</dd>
                <dd>开工时间：5月1日-5月30日</dd>
                <dd>竣工时间：5月1日-5月6日（6天）</dd>
                <dd>施工地址：天津荣业大街11号</dd>
                <dd>结算方式：日结</dd>
                <dd>工单类型：非指派</dd>
                <dd>工作内容：上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。</dd>
              </dl>
            </div>
          </div>
        </Content>
        <div className={style['work-detail-footer']}>
          <div className={style['work-detail-footer-l']}>
            <a><NewIcon type='icon-message_pre' className={style['icon-footer']} />聊天</a>
          </div>
          <div className={`${style['work-detail-footer-m']} my-right-border`}></div>
          <div className={style['work-detail-footer-r']}>
            <Button className={style['snatch-btn']} type='primary'>立即抢单</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkDetail
